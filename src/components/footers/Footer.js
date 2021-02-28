import React from 'react'
import tw from "twin.macro";
import styled from "styled-components";

const Container = tw.div`relative bg-green-500 text-gray-100 -mx-8 mt-8 -mb-8 px-8`;
const Content = tw.div`max-w-screen-xl mx-auto pt-16 pb-8`
const FiveColumns = tw.div`flex flex-wrap justify-between`;

const Column = tw.div`w-1/2 md:w-1/5 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left`;
const CompanyColumn = tw.div`text-center md:text-left mb-16 lg:mb-0 w-full lg:w-1/5`;

const ColumnHeading = tw.h5`font-bold uppercase`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300`;


const CopyrightAndCompanyInfoRow = tw.div`pb-0 text-sm font-normal flex flex-col sm:flex-row justify-between items-center`
const CopyrightNotice = tw.div``
const CompanyInfo = tw.div``

const Divider = tw.div`my-8 border-b-2 border-white`

export default function Footer() {
    return (
        <Container>
            <Content>
                <FiveColumns>
                    <CompanyColumn>
                    <ColumnHeading>Navigation</ColumnHeading>
                    </CompanyColumn>
                    <Column>
                    <ColumnHeading>Quick Links</ColumnHeading>
                        <LinkList>
                        <LinkListItem>
                            <Link href="#">Blog</Link>
                        </LinkListItem>
                        <LinkListItem>
                            <Link href="#">FAQs</Link>
                        </LinkListItem>
                        <LinkListItem>
                            <Link href="#">Support</Link>
                        </LinkListItem>
                        <LinkListItem>
                            <Link href="#">About Us</Link>
                        </LinkListItem>
                        </LinkList> 
                    </Column>
                    <Column>
                        <ColumnHeading>Product</ColumnHeading>
                        <LinkList>
                        <LinkListItem>
                            <Link href="#">Log In</Link>
                        </LinkListItem>
                        <LinkListItem>
                            <Link href="#">Personal</Link>
                        </LinkListItem>
                        <LinkListItem>
                            <Link href="#">Business</Link>
                        </LinkListItem>
                        <LinkListItem>
                            <Link href="#">Team</Link>
                        </LinkListItem>
                        </LinkList>
                    </Column>
                    <Column>
                        <ColumnHeading>Legal</ColumnHeading>
                        <LinkList>
                        <LinkListItem>
                            <Link href="#">GDPR</Link>
                        </LinkListItem>
                        <LinkListItem>
                            <Link href="#">Privacy Policy</Link>
                        </LinkListItem>
                        <LinkListItem>
                            <Link href="#">Terms of Service</Link>
                        </LinkListItem>
                        <LinkListItem>
                            <Link href="#">Disclaimer</Link>
                        </LinkListItem>
                        </LinkList>
                    </Column>
                    <Column>
                        <ColumnHeading>Contact</ColumnHeading>
                        <LinkList>
                        <LinkListItem>
                            +1 (234) (567)-8901
                        </LinkListItem>
                        <LinkListItem>
                            <Link href="mailto:support@servana.com">support@servana.com</Link>
                        </LinkListItem>
                        <LinkListItem>
                            <Link href="#">Sales</Link>
                        </LinkListItem>
                        <LinkListItem>
                            <Link href="#">Report Abuse</Link>
                        </LinkListItem>
                        </LinkList>
                    </Column>
                    </FiveColumns>
                <Divider/>
                <CopyrightAndCompanyInfoRow>
                <CopyrightNotice>&copy; Copyright ( +237)</CopyrightNotice>
                <CompanyInfo></CompanyInfo>
                </CopyrightAndCompanyInfoRow>
            </Content>
        </Container>
    )
}
