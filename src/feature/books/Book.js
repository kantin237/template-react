import React from 'react'

import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";

const PrimaryButtonBase = tw.button`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;

const Plan = tw.div`w-full max-w-sm mt-16 lg:mr-8 lg:last:mr-0 text-center px-8 rounded-2xl shadow relative pt-2 text-gray-900 h-full   flex flex-col`

// const Plan = styled.div`
//   ${tw`w-full max-w-sm mt-16 lg:mr-8  lg:last:mr-0 text-center px-8 rounded-lg shadow relative pt-2 text-gray-900 h-full bg-white flex flex-col`}
//   .planHighlight {
//     ${tw`rounded-t-lg absolute top-0 inset-x-0 h-2`}
//   }
//   ${props =>
//     props.featured &&
//     css`
//       background: rgb(100,21,255);
//       background: linear-gradient(135deg, rgba(100,21,255,1) 0%, rgba(128,64,252,1) 100%);
// background: rgb(85,60,154);
// background: linear-gradient(135deg, rgba(85,60,154,1) 0%, rgba(128,90,213,1) 100%);
// background: rgb(76,81,191);
// background: linear-gradient(135deg, rgba(76,81,191,1) 0%, rgba(102,126,234,1) 100%);
//       ${tw`bg-primary-500 text-gray-100`}
//       .planHighlight {
//         ${tw`hidden`}
//       }
//       .duration {
//         ${tw`text-gray-200!`}
//       }
//       ${PlanFeatures} {
//         ${tw`border-red-500`}
//       }
//       .feature:not(.mainFeature) {
//         ${tw`text-gray-300!`}
//       }
//       ${BuyNowButton} {
//         ${tw`bg-gray-100 text-primary-500 hocus:bg-gray-300 hocus:text-primary-800`}
//     `}
// `;

const PlanHeader = styled.div`
  ${tw`flex flex-col uppercase leading-relaxed py-8`}
  .name {
    ${tw`font-bold text-xl`}
  }
  .price {
    ${tw`font-bold text-4xl sm:text-5xl my-1`}
  }
  .duration {
    ${tw`text-gray-500 font-bold tracking-widest`}
  }
`;
const PlanFeatures = styled.div`
  ${tw`flex flex-col -mx-8 px-8 py-2 border-t-2 border-b-2 flex-1`}
  .feature {
    ${tw`mt-2 first:mt-0 font-medium`}
    &:not(.mainFeature) {
      ${tw`text-gray-600`}
    }
  }
  .mainFeature {
    ${tw`text-xl font-bold tracking-wide`}
  }
`;

const PlanAction = tw.div`px-4 sm:px-8 xl:px-16 py-8`;
const BuyNowButton = styled(PrimaryButtonBase)`
  ${tw`rounded-full uppercase tracking-wider py-4 w-full text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`}
`;
const Test = tw.div`text-red-500 border-blue-500  m-5`;


export default function Book(props) {
    return (
          
          <Plan className="planHighlight">
              <PlanHeader >
                  <span className="name">{props.author}</span>
                  <span className="price">{props.pages}</span>
                  <span className="duration">{props.title}</span>
              </PlanHeader>
                         <hr/>
              <PlanFeatures >
                  <span className="feature mainFeature">{props.published.slice(0,10)}</span>
                  <span  className="feature">
                  {props.publisher}
                  </span>
              </PlanFeatures>
              <PlanFeatures>
                  <span className="feature mainFeature">{props.subtitle}</span>
                  <span  className="feature">
                  {props.description}
                  </span>
              </PlanFeatures>
              <PlanAction>
              {props.website.slice(0,30)}
              </PlanAction>
          </Plan>
    )
}
