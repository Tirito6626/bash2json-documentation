# addName 
 $slash_json | ${jq_binary} '. += { "name_localizations": "'"${1}"'" }') name=$1
