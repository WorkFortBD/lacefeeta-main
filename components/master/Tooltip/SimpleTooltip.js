import React, { useRef } from 'react';
import { Overlay, Popover } from "react-bootstrap";


/**
 * Simple Tooltip component
 * 
 * Component for use where need tooltip & pass parameters as title="Tooltip heading title" & Description for body
 * 
 * @since 1.0.0
 * 
 * @param string title - required
 * @param string description - nullable
 * @param boolean showTooltip - required
 * @param boolean target - nullable
 * @param boolean ref - nullable
 *  
 * @return SimpleTooltip
 */

const SimpleTooltip = ({ title = '', description = null, showTooltip = false, target = null }) => {

    const ref = useRef(null);

    return (
        <div className="simple_tooltip">
            <Overlay
                show={showTooltip}
                target={target}
                placement="bottom"
                container={ref.current}
                containerPadding={20}
            >
                <Popover id="popover-contained">
                    <Popover.Title as="h5" className="simple_tooltip_title">{title}</Popover.Title>
                    <Popover.Content>
                        {
                            description !== null && <p className="simple_tooltip _description">{description}</p>
                        }
                    </Popover.Content>
                </Popover>
            </Overlay>
        </div>
    );
};

export default SimpleTooltip;