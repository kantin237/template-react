import React from 'react'
import tw from "twin.macro";
import styled from "styled-components";

const Head = tw.header`px-10 text-center text-white bg-green-500`
const Title = tw.h1`text-3xl`


export default function Header() {
    return (
        <div>
            <Head>
                <Title>ReactJs Template</Title>
            </Head>            
        </div>
    )
}
