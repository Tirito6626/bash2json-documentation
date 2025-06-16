---
title: guild_emoji_modify
---
# guild_emoji_modify 
Modify the given emoji. For emojis created by the current user, requires either the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission. For other emojis, requires the MANAGE_GUILD_EXPRESSIONS permission. Returns the updated emoji object on success

Count | Name | Type | Required        
----|----|----|---- 
1 | guild_id | Snowflake | True
2 | emoji_id | Snowflake | True
3 | name | String | True
4 | roles | Array of snowflakes | True
