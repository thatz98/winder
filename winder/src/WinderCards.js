import React, { useState } from 'react';
import TinderCart from 'react-tinder-card';
import './WinderCards.css';

function WinderCards() {

    const [people, setPeople] = useState([
        {
            name: 'David Santony',
            url: 'https://www.unitedagents.co.uk/sites/default/files/thumbnails/image/guy-2.jpg'
        },
        {
            name: 'Alexander Blowboi',
            url: 'https://guyrothblum.files.wordpress.com/2014/11/guy_rothblum_square.jpg'
        },
        {
            name: 'Washila Bishop',
            url: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            name: 'Suana Hemrs',
            url: 'https://1.bp.blogspot.com/-gIyrZfz4-p0/XJ7ytRHoSDI/AAAAAAAADhk/WUrMaMHCypI2JYLKN_D7pcgFncDWIzobgCEwYBhgL/s1600/DJXlgl-VwAATyUb.jpeg'
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    }
    return (
        <div className="windercards">
            <div className="winderCards__cardContainer">
                {people.map((person) => (
                    <TinderCart
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url}` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCart>
                ))}
            </div>

        </div>
    )
}

export default WinderCards