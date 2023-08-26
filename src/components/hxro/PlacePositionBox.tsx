import { PositionSideEnum } from '@hxronetwork/parimutuelsdk';
import React, { FC, useState } from 'react';
import { useEffect } from 'react';
import PlacePosition from './PlacePosition'

const PlacePositionBox: FC<{ pubkey: string }> = (props) => {
    const [inputValue, setInputValue] = useState('Enter Amount...');
    const [amount, setAmount] = useState('0')
    const { pubkey } = props

    useEffect(() => {
    }, [pubkey]);

    if (pubkey === 'Loading') {
        return (
            <view>
                Loading...
            </view>
        )
    }

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
        setAmount(event.target.value);
        if (!event.target.value) {
          setInputValue('Enter Amount...');
        }
    };
    
    return (
        <view style={{ textAlign: 'center' }}>
            <input
                type="number"
                value={inputValue}
                onChange={handleChange}
                placeholder={inputValue}
                style={{ color: 'black', Radius: '10px', display: 'inline-block', textAlign: 'center', }}
            />
            <view style={{ marginLeft: '-15px', marginTop: '10px' }}>
                <PlacePosition amount={amount} pariPubkey={pubkey} side={PositionSideEnum.LONG}/>
                <PlacePosition amount={amount} pariPubkey={pubkey} side={PositionSideEnum.SHORT} />
            </view>
        </view>
    );
};

export default PlacePositionBox;