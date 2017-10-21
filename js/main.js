import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
    {
        'title': "Make it say",
        'href': "https://example.com",
        'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet mauris viverra, iaculis velit eget, aliquet sapien. Proin id sodales mi. Proin commodo varius aliquam. Praesent in aliquet magna, vel fermentum magna. Duis lacinia est sit amet magna semper scelerisque. Nullam sollicitudin, lacus sit amet aliquam rutrum, arcu augue tincidunt elit, et tempus nisl nulla in ante. Integer ligula arcu, fermentum a ante at, efficitur ultricies lacus.",
        'image': {
            'desc': "example screenshot of a project involving code",
            'src': 'images/example1.png',
            'comment': ""
        }
    },
    {
        'title': "Monkey Pants",
        'href': "https://example.com",
        'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet mauris viverra, iaculis velit eget, aliquet sapien. Proin id sodales mi. Proin commodo varius aliquam. Praesent in aliquet magna, vel fermentum magna. Duis lacinia est sit amet magna semper scelerisque. Nullam sollicitudin, lacus sit amet aliquam rutrum, arcu augue tincidunt elit, et tempus nisl nulla in ante. Integer ligula arcu, fermentum a ante at, efficitur ultricies lacus.",        
        'image': {
            'desc': "A Serverless Portfolio",
            'src': 'images/example2.png',
            'comment': ""
        }
    },
    {
        'title': "Eve the Cat",
        'href': "https://example.com",
        'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet mauris viverra, iaculis velit eget, aliquet sapien. Proin id sodales mi. Proin commodo varius aliquam. Praesent in aliquet magna, vel fermentum magna. Duis lacinia est sit amet magna semper scelerisque. Nullam sollicitudin, lacus sit amet aliquam rutrum, arcu augue tincidunt elit, et tempus nisl nulla in ante. Integer ligula arcu, fermentum a ante at, efficitur ultricies lacus.",        
        'image': {
            'desc': "example screenshot of a project involving cats",
            'src': 'images/example3.png',
            'comment': `"Bengal cat" by roberto shabs is licensed under CC BY 2.0
                        https://www.flickr.com/photos/37287295@N00/2540855181`
        }
    }
]
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'))


