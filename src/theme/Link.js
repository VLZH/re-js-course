import React from "react";
import "./Link.css";

export const Link = ({ href, title, subtitle, caption, image }) => {
    return (
        <div className="mdx_link_wrapper">
            <a href={href} className="mdx_link">
                <div className="mdx_link_left">
                    <span className="mdx_link_title">{title}</span>
                    {subtitle ? (
                        <span className="mdx_link_subtitle">{subtitle}</span>
                    ) : null}
                    <span className="mdx_link_href">{href}</span>
                </div>
                {image ? (
                    <div className="mdx_link_right">
                        <img className="mdx_link_image" src={image} />
                    </div>
                ) : null}
            </a>
            <span className="mdx_link_cation">{caption}</span>
        </div>
    );
};

export default Link;
