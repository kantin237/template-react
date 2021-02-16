import React from 'react'

export default function Intercom() {
    return (
        <div>
            <Intercom
                open
                appId="fyq3wodw"
                user={{
                    user_id: '9876',
                    email: 'john.doe@example.com',
                    created_at: 1234567890,
                    name: 'John Doe',
                }}
                onOpen={() => {}}
                onClose={() => {}}
                onUnreadCountChange={unreadCount => {}}
                onInitialization={intercom => {}}
                />
        </div>
    )
}
