import { SectionList, Text, View } from "react-native";
import PropTypes from "prop-types";

// component imports...
import { Row } from "./Row";

export const ContactsList = ({phoneContacts}) => {
    const sectionHeader = ({section}) => <Text style={{fontSize: 40, marginLeft: 10}}>{section.title}</Text>

    const renderItem = ({item}) => <Row {...item} />

    const contactsByLetters = phoneContacts.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase()
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact],
        }
    }, {})

    const sections = Object.keys(contactsByLetters).sort().map(letters => ({
        title: letters,
        data: contactsByLetters[letters],
    }))

    return (
        <SectionList
            sections={sections}
            renderSectionHeader={sectionHeader}
            renderItem={renderItem}
        />
    )
}

ContactsList.propTypes = {
    renderItem: PropTypes.func,
    renderSectionHeader: PropTypes.func,
    sections: PropTypes.array,
}