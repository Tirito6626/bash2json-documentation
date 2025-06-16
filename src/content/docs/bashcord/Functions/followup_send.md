---
title: followup_send
---
# followup_send
Create a followup message for an Interaction. Functions the same as [Execute Webhook](https://discord.com/developers/docs/resources/webhook#execute-webhook), but wait is always true. The thread_id, avatar_url, and username parameters are not supported when using this endpoint for interaction followups.

flags can be set to 64 to mark the message as ephemeral, except when it is the first followup message to a deferred Interactions Response. In that case, the flags field will be ignored, and the ephemerality of the message will be determined by the flags value in your original ACK

Count | Name | Type | Required        
----|----|----|---- 
1 | application_id | Snowflake | True
2 | interaction_token | String | True
3 | json | JSON Object | True