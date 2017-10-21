import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from "../../js/example-work-modal";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const myExample = {
    'title': "Make it say",
    'href': "https://www.example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet mauris viverra, iaculis velit eget, aliquet sapien. Proin id sodales mi. Proin commodo varius aliquam. Praesent in aliquet magna, vel fermentum magna. Duis lacinia est sit amet magna semper scelerisque. Nullam sollicitudin, lacus sit amet aliquam rutrum, arcu augue tincidunt elit, et tempus nisl nulla in ante. Integer ligula arcu, fermentum a ante at, efficitur ultricies lacus.",
    'image': {
        'desc': "example screenshot of a project involving code",
        'src': 'images/example1.png',
        'comment': ""
    }
};

describe("ExampleWorkModal component", () => {
    let component = shallow(<ExampleWorkModal example={myExample}
    open={false}/>);

    let openComponent = shallow(<ExampleWorkModal example={myExample}
        open={true}/>);

    let anchors = component.find("a");

    it("Should contain a single 'a' element", () => {
        expect(anchors.length).toEqual(1);
    });

    //it("Should link to our project", () => {
    //    expect(anchors.node.props.href).toEqual(myExample.href);
    //});

    it("Should have the modal class set correctly", () => {
        expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
        expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBe(true);
    });
});

