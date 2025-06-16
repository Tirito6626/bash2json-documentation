---
title: interaction_reply
---
Create a response to an Interaction from the gateway. Body is an interaction response. Returns 204 No Content

Count | Name | Type | Required        
----|----|----|---- 
1 | interaction_id | Snowflake | True
2 | interaction_token | String | True
3 | json | JSON Object | True