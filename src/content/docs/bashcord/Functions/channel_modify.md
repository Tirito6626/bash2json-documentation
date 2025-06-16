---
title: channel_modify
---
# channel_modify 
Update a channel's settings. Returns a channel on success, and a 400 BAD REQUEST on invalid parameters

Count | Name | Type | Required        
----|----|----|----  
1 | channel_id | Snowflake | True
2 | json | JSON-Object | False

https://discord.com/developers/docs/resources/channel#modify-channel