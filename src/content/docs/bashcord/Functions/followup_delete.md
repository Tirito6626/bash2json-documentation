---
title: followup_delete
---
Deletes a followup message for an Interaction. Returns 204 No Content on success

Count | Name | Type | Required        
----|----|----|---- 
1 | application_id | Snowflake | True
2 | interaction_token | String | True
3 | message_id | Snowflake | True