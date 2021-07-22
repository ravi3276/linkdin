import React from 'react'
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {

    const newsArticle=(headings,subtitle) => (
        <div className="widgets__news">
            <FiberManualRecordIcon />

            <div className="widgets__newsRight">
                <h2>{headings}</h2>
                <h3>{subtitle}</h3>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
            <h2>Linkedin News</h2>
            <InfoIcon />
            </div>
            {newsArticle('react is back','now building linkdin')}
            {newsArticle('linkedin provides..','now building... ')}
            {newsArticle('react is back','now building linkdin')}
            {newsArticle('react is back','now building linkdin')}
            {newsArticle('react is back','now building linkdin')}

        </div>

    )
}

export default Widgets
