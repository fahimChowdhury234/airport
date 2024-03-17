(function() {
  (function($) {
    var default_options, notify_methods;
    default_options = {
      'title': "Notification",
      'body': "Body",
      'closeTime': 300000,
      'icon': "",
      'requireInteraction': true
    };
    notify_methods = {
      create_notification: function(options) {
        return new Notification(options.title, options);
      },
      close_notification: function(notification, options) {
        return setTimeout(notification.close.bind(notification), options.closeTime);
      },
      set_default_icon: function(icon_url) {
        return default_options.icon = icon_url;
      },
      isSupported: function() {
        if (("Notification" in window) && (Notification.permission !== "denied")) {
          return true;
        } else {
          return false;
        }
      }
    };
    return $.extend({
      notify: function(body, arguments_options) {
        var notification, options;
        if (arguments.length < 1) {
          throw "Notification: few arguments";
        }
        if (typeof body !== 'string') {
          throw "Notification: body must 'String'";
        }
        default_options.body = body;
        options = $.extend(default_options, arguments_options);
        if (notify_methods.isSupported()) {
          notification = notify_methods.create_notification(options);
          notify_methods.close_notification(notification, options);
          return {
            click: function(callback) {
              notification.addEventListener('click', function() {
                parent.focus(); window.focus();
                return callback();
              });
              return this;
            },
            show: function(callback) {
              notification.addEventListener('show', function() {
                return callback();
              });
              return this;
            },
            close: function(callback) {
              notification.addEventListener('close', function() {
                return callback();
              });
              return this;
            },
            error: function(callback) {
              notification.addEventListener('error', function() {
                return callback();
              });
              return this;
            }
          };
        }
      }
    });
  })(jQuery);

}).call(this);


function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var pushNotificationModal = new bootstrap.Modal(document.getElementById('notificationPermission'));

function triggerNotifications(data) {
  $.notify(data['message']).click(function() {
    notificationID = "";
    notificationLink = "";
    if(data['nid']) {
      notificationID = data['nid'];
      if(data['link']) {
        notificationLink = data['link'];
      }
      notificationRead(notificationID, notificationLink)
    }
  });
}

if(Notification.permission === 'default') {
  if(getCookie('push_notification_bar') != "N") {
    pushNotificationModal.show();
  }
  // Notification.requestPermission();
}

$('#allow-push-notification').click(function () {
  pushNotificationModal.hide();
  Notification.requestPermission();
});

$('#close-push-notification').click(function () {
  pushNotificationModal.hide();
  d = new Date();
  d.setTime(d.getTime() + (1*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = "push_notification_bar=N;expires=" + expires + ";path=/";
});