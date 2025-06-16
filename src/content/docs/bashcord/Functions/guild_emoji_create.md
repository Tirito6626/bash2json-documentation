---
title: guild_emoji_create
---
# guild_emoji_create
Create a new emoji for the guild. Requires the CREATE_GUILD_EXPRESSIONS permission. Returns the new emoji object on success 

Count | Name | Type | Required        
----|----|----|---- 
1 | guild_id | Snowflake | True
2 | name | String | True
3 | image | Image data | True
4 | roles | Array of snowflakes | True