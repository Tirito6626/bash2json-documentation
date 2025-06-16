# channel_thread_members_get 
Returns array of thread members objects that are members of the thread.

When with_member is set to true, the results will be paginated and each thread member object will include a member field containing a guild member object

Count | Name | Type | Required        
----|----|----|---- 
1 | channel_id | Snowflake | True
2 | with_member | Boolean | False
3 | after | Snowflake | False
4 | limit | Integer | False