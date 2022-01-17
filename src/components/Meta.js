import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keyword' content={keywords} />
            </Helmet>
        </>
        )

}

Meta.defaultProps = {
    title: 'Living With Lindy',
    description: 'We sell and print the best shirts!',
    keywords: 'apprarel, clothes, custom prints, shirts'
}

export default Meta