<?php
define('C_REST_CLIENT_ID', 'local.63e12b6ba04b67.35876402');//Application ID
define('C_REST_CLIENT_SECRET', 'o76ASlgZq8lQa2I7G6YshAjHB6nz2I1GRE00gcnF7iDvuwRot7');//Application key
// or
//define('C_REST_WEB_HOOK_URL','https://rest-api.bitrix24.com/rest/1/doutwqkjxgc3mgc1/');//url on creat Webhook

//define('C_REST_CURRENT_ENCODING','windows-1251');
define('C_REST_IGNORE_SSL',true);//turn off validate ssl by curl
define('C_REST_LOG_TYPE_DUMP',false); //logs save var_export for viewing convenience
define('C_REST_BLOCK_LOG',true);//turn off default logs
define('C_REST_LOGS_DIR', __DIR__ .'/logs/'); //directory path to save the log