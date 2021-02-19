import React from 'react'
import ContentLayout from './ContentLayout'
import SideLayout from './SideLayout'

export default function MainLayout() {
    return (
        <div class="row">
            <div class="col-4">
                <SideLayout />
            </div>
            <div class="col-8">
                <ContentLayout />
            </div>
        </div>
    )
}
