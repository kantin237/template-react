import React from 'react'
import tw from "twin.macro";
import styled from "styled-components";


const Navbar = tw.nav`overflow-hidden bg-gray-400 sticky top-0`
const Link = tw.a` text-black text-center px-8 py-2 no-underline block float-left hover:bg-green-400 hover:text-white hover:no-underline `

export default function NavigationLayout() {
    return (
        <Navbar>
            <Link>Home</Link>
            <Link>Page 1</Link>
        </Navbar>
    )
}
