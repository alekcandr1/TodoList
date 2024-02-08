type AccordionPropsType = {
    title: string
    isOpen: boolean
}

export const Accordion = ( {title, isOpen}: AccordionPropsType ) => {
    return <div>
        <AccordionTitle title={ title }/>
        { isOpen && <AccordionBody/> }
        { <AccordionBody/> }
    </div>
}

type AccordionTitlePropsType = {
    title: string
}
const AccordionTitle = ( {title}: AccordionTitlePropsType ) => {
    return <h3>{ title }</h3>
};

type AccordionBodyPropsType = {}
const AccordionBody = () => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
};

export default Accordion;