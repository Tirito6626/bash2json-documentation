# guild_bans_get 
Returns a list of ban objects for the users banned from this guild. Requires the BAN_MEMBERS permission

Count | Name | Type | Required        
----|----|----|----
1 | guild_id | Snowflake | True
2 | limit | Number | False 
3 | before | Snowflake | False
4 | after | Snowflake | False