import React, {useEffect} from 'react'
import Book from './Book'
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";

import {loadBooks} from '../../redux/book/bookAction'
import {useDispatch,useSelector} from 'react-redux'

const Container = tw.div`relative`;
const ContentWithPaddingXl= tw.div`max-w-screen-xl mx-auto py-10 lg:py-16`;
const HeaderContainer = tw.div`mt-3 w-full flex flex-col items-center`;
const Heading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center w-full`
const Description = tw.p`w-full text-center mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl`;

const PlansContainer = tw.div`flex justify-between flex-col grid grid-cols-3 gap-4 lg:flex-row items-center lg:items-stretch relative`;


export default function ListBook() {

    const dispatch = useDispatch();
    const stateBook = (useSelector(state => {return state.bookReducer.books}) || []) ;
    console.log(stateBook);
    const load =() =>{
        return dispatch(loadBooks());
    }

    useEffect(() => {
        load();
    },[]);
    
    return (
        <div>
            <Container>
                <ContentWithPaddingXl>
                <HeaderContainer >
                <Heading>Study JavaScript for beguinner to expert</Heading>
                <Description>choose your book and biguin to train your JavaScript to become an expert</Description>
            </HeaderContainer>
            <PlansContainer>
            {stateBook.map(book =>(
                <div>
                    <Book 
                        key = {book.isbn}
                        title = {book.title}
                        subtitle = {book.subtitle}
                        author = {book.author}
                        published = {book.published}
                        publisher = {book.publisher}
                        pages = {book.pages}
                        description = {book.description}
                        website = {book.website}
                    />
                </div>
            ))}
            </PlansContainer>
                </ContentWithPaddingXl>
            </Container>
        </div>
    )
}
