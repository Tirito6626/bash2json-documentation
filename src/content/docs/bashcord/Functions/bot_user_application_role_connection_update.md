---
title: bot_user_application_role_connection_update 
---
Updates and returns the application role connection for the user. Requires an OAuth2 access token with role_connections.write scope for the application specified in the path.

 Count | Name | Type | Required        
----|----|----|----
 1 | application_id | Snowflake | True
 2 | platform_name | String | False
 3 | platform_username | String | False
 4 | metadata | Object | False