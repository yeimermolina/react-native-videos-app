import React from 'react'
import {
	View,
	StyleSheet
} from 'react-native'


const horizontalSeparator = (props) => (
	<View 
		style={styles.separator}
	/>
)

const styles = StyleSheet.create({
	separator: {
		flex: 1,
		marginHorizontal: 5
	}
})

export default horizontalSeparator