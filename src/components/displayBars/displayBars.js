import React, { useState, useEffect } from 'react';
import "./displayBars.scss"; 
import BarService from "../../core/services/bar.service";
import Calculator from "../../core/helpers/calculator";
import DisplayButtons from '../displayButtons/displayButtons';
import { ProgressBar } from "react-bootstrap";

const barService = new BarService();
const calculator = new Calculator();

function DisplayBars() {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ buttons, setButtons ] = useState(null);
    const [ bars, setBars ] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const result = await barService.getBars();
            setButtons(result.buttons);
            setBars(result.bars);
            setIsLoading(false);
        }
        setIsLoading(true);
        fetchData();
    }, []);
  
    const setValues = (value) => {
        const progressBars = [ ...bars ];
        progressBars.forEach(bar => {
            if (bar.selected) {
                const newValue = bar.currentValue + value;
                bar.currentValue = newValue > 0 ? newValue : 0;
            }
        });
        setBars(progressBars);
    }

    const selectBar = (id) => {
        const progressBars = [ ...bars ];
        progressBars.forEach(bar => {
            bar.selected = Number(bar.id) === Number(id) ? true : false;
        });
        setBars(progressBars);
    }

    return (
        <div className="bars-container">
            {isLoading && <p>Loading...</p>}
            {!isLoading && 
                <>
                    <h2>Progress Bars Demo</h2>
                    <div className="progress-bars">
                        {bars.map(bar => 
                            <div className="bar" key={bar.id}>
                                <label className={bar.selected ? 'labelStyle' : ''}>
                                    {bar.id + 1}
                                </label>
                                <ProgressBar
                                    striped
                                    variant={bar.currentValue > bar.maxValue ? "danger" : "success"}
                                    animated
                                    max={bar.maxValue}
                                    label={`${calculator.calculatePercentage(bar.currentValue, bar.maxValue)}%`}
                                    now={bar.currentValue} 
                                />
                            </div>
                        )}
                    </div>

                    <DisplayButtons 
                        buttons={buttons}
                        applyValue={setValues}
                        dropdownItems={bars.map(bar => bar.id)}
                        selectItem={selectBar}
                    />
                </>
            }
        </div>
    );
}

export default DisplayBars;
