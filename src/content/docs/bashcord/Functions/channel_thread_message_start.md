---
title: channel_thread_message_start
---
# channel_thread_message_start 
Creates a new thread from an existing message. Returns a channel on success, and a 400 BAD REQUEST on invalid parameters. Fires a Thread Create and a Message Update Gateway event.

When called on a GUILD_TEXT channel, creates a PUBLIC_THREAD. When called on a GUILD_ANNOUNCEMENT channel, creates a ANNOUNCEMENT_THREAD. Does not work on a GUILD_FORUM or a GUILD_MEDIA channel. The id of the created thread will be the same as the id of the source message, and as such a message can only have a single thread created from it

Count | Name | Type | Required        
----|----|----|---- 
1 | channel_id | Snowflake | True
2 | message_id | Snowflake | True
3 | name | String | True
4 | auto_archive_duration | Integer | True 
5 | rate_limit_per_user | Integer | False
