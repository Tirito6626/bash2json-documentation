# channel_threads_archived_private 
Returns archived threads in the channel that are of type PRIVATE_THREAD. Threads are ordered by archive_timestamp, in descending order. Requires both the READ_MESSAGE_HISTORY and MANAGE_THREADS permissions

Count | Name | Type | Required        
----|----|----|----
1 | channel_id | Snowflake | True
2 | before | Timestamp | False 
3 | limit | Integer | False