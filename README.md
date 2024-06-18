# OnTIme-server

OnTime App is an application to manage attendance employee. This app has :

-   RESTful endpoint for asset's CRUD operation
-   JSON formatted response

## POST /login

### Request

-   body

```json
{
    "email": "mute@mail.com",
    "password": "yourpassword"
}
```

### Response

_200 - OK_

```json
{
    "token": "<your access token>"
}
```

_400 - Bad Request_

```json
{
    "message": "Email required"
}
```

```json
{
    "message": "Password required"
}
```

_401 - Unauthorized_

```json
{
    "message": "Email/Password Invalid"
}
```

## POST /add-user

### Request

-   header

```json
{
    "token": "<your access token>"
}
```

-   body

```json
{
    "name": "Kevin Mute",
    "email": "mute@mail.com",
    "password": "yourpasssword",
    "position": "Back End Developer",
    "CompanyId": 1,
    "phoneNumber": "088238394817",
    "avaUrl": "yourimageurl"
}
```

### Response

_201 - Created_

```json
{
    "role": "staff",
    "id": 8,
    "name": "Kevin Mute",
    "email": "mute@mail.com",
    "password": "yourpassword",
    "position": "Back End Developer",
    "CompanyId": 1,
    "phoneNumber": "88238394817",
    "avaUrl": "yourimageurl",
    "updatedAt": "2024-06-18T06:52:03.356Z",
    "createdAt": "2024-06-18T06:52:03.356Z"
}
```

_400 - Bad Request_

```json
{
    "message": "Name is required"
}
```

```json
{
    "message": "Email is required"
}
```

```json
{
    "message": "Email is not valid"
}
```

```json
{
    "message": "Email is already in use"
}
```

```json
{
    "message": "Password is required"
}
```

```json
{
    "message": "Password must be at least 5 characters long"
}
```

```json
{
    "message": "Position is required"
}
```

```json
{
    "message": "Company ID is required"
}
```

## GET /attendances

### Request

-   header

```json
{
    "token": "<your access token>"
}
```

### Response

_200 - OK_

```json
[
    {
        "id": 1,
        "clockIn": "2024-06-18T09:07:30.535Z",
        "clockOut": null,
        "attendanceStatus": "late",
        "UserId": 7,
        "createdAt": "2024-06-18T09:07:30.537Z",
        "updatedAt": "2024-06-18T09:07:30.537Z",
        "User": {
            "name": "Kemal Mute",
            "email": "mute@mail.com"
        }
    },
    ...
]
```

## POST /attendances

### Request

-   header

```json
{
    "token": "<your access token>"
}
```

### Response

_201 - Created_

```json
{
    "id": 1,
    "UserId": 7,
    "clockIn": "2024-06-18T09:07:30.535Z",
    "attendanceStatus": "late",
    "updatedAt": "2024-06-18T09:07:30.537Z",
    "createdAt": "2024-06-18T09:07:30.537Z",
    "clockOut": null
}
```

_400 - Bad Request_

```json
{
    "message": "Already clocked in today"
}
```

_404 - Not Found_

```json
{
    "message": "User not found"
}
```

## PATCH /attendances/:id

### Request

-   header

```json
{
    "token": "<your access token>"
}
```

-   params

```json
{
    "id": integer
}
```

### Response

_200 - OK_

```json
{
    "id": 1,
    "clockIn": "2024-06-18T09:07:30.535Z",
    "clockOut": "2024-06-18T09:24:39.272Z",
    "attendanceStatus": "late",
    "UserId": 7,
    "createdAt": "2024-06-18T09:07:30.537Z",
    "updatedAt": "2024-06-18T09:24:39.273Z"
}
```

_404 - Not Found_

```json
{
    "message": "Attendance not found or already clocked out"
}
```

## PATCH /attendances/update/:id

### Request

-   header

```json
{
    "token": "<your access token>"
}
```

-   params

```json
{
    "id": integer
}
```

-   body

```json
{
    "status": string
}
```

### Response

_200 - OK_

```json
{
    "id": 1,
    "clockIn": "2024-06-18T09:07:30.535Z",
    "clockOut": "2024-06-18T09:24:39.272Z",
    "attendanceStatus": "on time",
    "UserId": 7,
    "createdAt": "2024-06-18T09:07:30.537Z",
    "updatedAt": "2024-06-18T10:12:55.542Z",
    "User": {
        "CompanyId": 1
    }
}
```

_404 - Not Found_

```json
{
    "message": "Attendance record not found or user not in the same company"
}
```

## GET /users

### Request

-   header

```json
{
    "token": "<your access token>"
}
```

### Response

_200 - OK_

```json
[
   {
        "id": 7,
        "name": "Kemal Mute",
        "role": "staff",
        "email": "mute@mail.com",
        "password": "yourpassword",
        "phoneNumber": "88238394815",
        "avaUrl": "yourimageurl",
        "position": "Back End Developer",
        "CompanyId": 1,
        "createdAt": "2024-06-18T06:49:10.236Z",
        "updatedAt": "2024-06-18T06:49:10.236Z",
        "Company": {
            "name": "Tech Innovators Inc."
        }
    },
    ...
]
```

## GET /users/:id

### Request

-   header

```json
{
    "token": "<your access token>"
}
```

-   params

```json
{
    "id": integer
}
```

### Response

_200 - OK_

```json
{
    "id": 7,
    "name": "Kemal Mute",
    "role": "staff",
    "email": "mute@mail.com",
    "password": "yourpassword",
    "phoneNumber": "88238394815",
    "avaUrl": "yourimageurl",
    "position": "Back End Developer",
    "CompanyId": 1,
    "createdAt": "2024-06-18T06:49:10.236Z",
    "updatedAt": "2024-06-18T06:49:10.236Z",
    "Company": {
        "name": "Tech Innovators Inc."
    },
    "Attendances": [
        {
            "id": 1,
            "clockIn": "2024-06-18T09:07:30.535Z",
            "clockOut": "2024-06-18T09:24:39.272Z",
            "attendanceStatus": "on time",
            "UserId": 7,
            "createdAt": "2024-06-18T09:07:30.537Z",
            "updatedAt": "2024-06-18T10:12:55.542Z"
        }
    ]
}
```

_404 - Not Found_

```json
{
    "message": "User not found"
}
```

## GET /users/profile/me

### Request

-   header

```json
{
    "token": "<your access token>"
}
```

### Response

_200 - OK_

```json
{
    "id": 7,
    "name": "Kemal Mute",
    "role": "staff",
    "email": "mute@mail.com",
    "password": "yourpassword",
    "phoneNumber": "88238394815",
    "avaUrl": "yourimageurl",
    "position": "Back End Developer",
    "CompanyId": 1,
    "createdAt": "2024-06-18T06:49:10.236Z",
    "updatedAt": "2024-06-18T06:49:10.236Z",
    "Company": {
        "id": 1,
        "name": "Tech Innovators Inc.",
        "totalLeaves": 12,
        "longitude": "106.816666",
        "latitude": "-6.2",
        "clockInTime": "2024-06-11T08:00:00.000Z",
        "clockOutTime": "2024-06-11T17:00:00.000Z"
    },
    "Attendances": [
        {
            "id": 1,
            "clockIn": "2024-06-18T09:07:30.535Z",
            "clockOut": "2024-06-18T09:24:39.272Z",
            "attendanceStatus": "on time",
            "UserId": 7,
            "createdAt": "2024-06-18T09:07:30.537Z",
            "updatedAt": "2024-06-18T10:12:55.542Z"
        }
    ],
    "Overtimes": [
        {
            "id": 1,
            "overtimeDate": "2024-06-17T17:00:00.000Z",
            "overtimeDuration": 60,
            "overtimeReason": "beres beres",
            "overtimeStatus": "Pending",
            "UserId": 7,
            "createdAt": "2024-06-18T06:50:27.823Z",
            "updatedAt": "2024-06-18T06:50:27.823Z"
        }
    ],
    "Leaves": [
        {
            "id": 1,
            "from": "2024-07-17T17:00:00.000Z",
            "to": "2024-07-28T17:00:00.000Z",
            "reason": "testing",
            "leaveStatus": "Pending",
            "UserId": 7,
            "DelegateUserId": 8,
            "createdAt": "2024-06-18T10:35:03.930Z",
            "updatedAt": "2024-06-18T10:35:03.930Z",
            "DelegateUser": {
                "name": "Zico FM",
                "email": "zico@mail.com"
            }
        }
    ]
}
```

_500 - Internal Server Error_

```json
{
    "message": "Failed to fetch logged-in user"
}
```

## POST /leaves

### Request

-   header

```json
{
    "token": "<your access token>"
}
```

-   body

```json
{
    "from": date,
    "to": date,
    "reason": string,
    "DelegateUserId": integer
}
```

### Response

_201 - Created_

```json
{
    "id": 1,
    "from": "2024-07-17T17:00:00.000Z",
    "to": "2024-07-28T17:00:00.000Z",
    "reason": "testing",
    "UserId": 7,
    "DelegateUserId": 8,
    "leaveStatus": "Pending",
    "updatedAt": "2024-06-18T10:35:03.930Z",
    "createdAt": "2024-06-18T10:35:03.930Z"
}
```

_400 - Bad Request_

```json
{
    "message": "From date is required"
}
```

```json
{
    "message": "To date is required"
}
```

```json
{
    "message": "Reason cannot be empty"
}
```

```json
{
    "message": "User ID is required"
}
```

## GET /leaves

### Request

-   header

```json
{
    "token": "<your access token>"
}
```

### Response

_200 - OK_

```json
[
    {
        "id": 1,
        "from": "2024-07-17T17:00:00.000Z",
        "to": "2024-07-28T17:00:00.000Z",
        "reason": "testing",
        "leaveStatus": "Pending",
        "UserId": 7,
        "DelegateUserId": 8,
        "createdAt": "2024-06-18T10:35:03.930Z",
        "updatedAt": "2024-06-18T10:35:03.930Z",
        "User": {
            "name": "Kemal Mute",
            "email": "mute@mail.com"
        },
        "DelegateUser": {
            "name": "Zico FM",
            "email": "zico@mail.com"
        }
    },
    ...
]
```

## GET /leaves/user/:userId

### Request

-   header

```json
{
    "token": "<your access token>"
}
```

-   params

```json
{
    "userId": integer
}
```

### Response

_200 - OK_

```json
[
    {
        "id": 1,
        "from": "2024-07-17T17:00:00.000Z",
        "to": "2024-07-28T17:00:00.000Z",
        "reason": "testing",
        "leaveStatus": "Pending",
        "UserId": 7,
        "DelegateUserId": 8,
        "createdAt": "2024-06-18T10:35:03.930Z",
        "updatedAt": "2024-06-18T10:35:03.930Z",
        "User": {
            "name": "Kemal Mute",
            "email": "mute@mail.com"
        },
        "DelegateUser": {
            "name": "Zico FM",
            "email": "zico@mail.com"
        }
    },
    ...
]
```

## PATCH /leaves/:id

### Request

-   header

```json
{
    "token": "<your access token>"
}
```

-   params

```json
{
    "id": integer
}
```

-   body

```json
{
    "leaveStatus": string
}
```

### Response

_200 - OK_

```json
{
    "id": 1,
    "from": "2024-07-17T17:00:00.000Z",
    "to": "2024-07-28T17:00:00.000Z",
    "reason": "testing",
    "leaveStatus": "Accepted",
    "UserId": 7,
    "DelegateUserId": 8,
    "createdAt": "2024-06-18T10:35:03.930Z",
    "updatedAt": "2024-06-18T11:40:56.153Z"
}
```

_404 - Not Found_

```json
{
    "message": "Leave not found"
}
```

## POST /overtimes

### Request

-   header

```json
{
    "token": "<your access token>"
}
```

-   body

```json
{
    "overtimeDate": date,
    "overtimeDuration": integer,
    "overtimeReason": string
}
```

### Response

_201 - Created_

```json
{
    "id": 2,
    "overtimeDate": "2024-07-17T17:00:00.000Z",
    "overtimeDuration": 60,
    "overtimeReason": "beres beres 2",
    "UserId": 8,
    "overtimeStatus": "Pending",
    "updatedAt": "2024-06-18T06:52:40.428Z",
    "createdAt": "2024-06-18T06:52:40.428Z"
}
```

_400 - Bad Request_

```json
{
    "message": "Overtime date is required"
}
```

```json
{
    "message": "Overtime duration is required"
}
```

```json
{
    "message": "Reason is required"
}
```

## GET /overtimes

### Request

-   header

```json
{
    "token": "<your access token>"
}
```

### Response

_200 - OK_

```json
[
    {
        "id": 1,
        "overtimeDate": "2024-06-17T17:00:00.000Z",
        "overtimeDuration": 60,
        "overtimeReason": "beres beres",
        "overtimeStatus": "Pending",
        "UserId": 7,
        "createdAt": "2024-06-18T06:50:27.823Z",
        "updatedAt": "2024-06-18T06:50:27.823Z",
        "User": {
            "name": "Kemal Mute",
            "email": "mute@mail.com"
        }
    },
    ...
]
```

## GET /overtimes/user/:userId

### Request

-   header

```json
{
    "token": "<your access token>"
}
```

-   params

```json
{
    "userId": integer
}
```

### Response

_200 - OK_

```json
[
    {
        "id": 1,
        "overtimeDate": "2024-06-17T17:00:00.000Z",
        "overtimeDuration": 60,
        "overtimeReason": "beres beres",
        "overtimeStatus": "Pending",
        "UserId": 7,
        "createdAt": "2024-06-18T06:50:27.823Z",
        "updatedAt": "2024-06-18T06:50:27.823Z",
        "User": {
            "name": "Kemal Mute",
            "email": "mute@mail.com"
        }
    },
    ...
]
```

## PATCH /overtimes/:id

### Request

-   header

```json
{
    "token": "<your access token>"
}
```

-   params

```json
{
    "id": integer
}
```

-   body

```json
{
    "overtimeStatus": string
}
```

### Response

_200 - OK_

```json
{
    "id": 1,
    "overtimeDate": "2024-06-17T17:00:00.000Z",
    "overtimeDuration": 60,
    "overtimeReason": "beres beres",
    "overtimeStatus": "Accepted",
    "UserId": 7,
    "createdAt": "2024-06-18T06:50:27.823Z",
    "updatedAt": "2024-06-18T12:08:57.302Z"
}
```

_404 - Not Found_

```json
{
    "message": "Overtime not found"
}
```

## Global Error

_500 - Internal Server Error_

```json
{
    "message": "Internal Server Error"
}
```
