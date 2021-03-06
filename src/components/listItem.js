import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring()
  }

  renderDescription() {
    if (this.props.showDescription) {
      return (
        <CardSection>
          <Text>{this.props.library.description}</Text>
        </CardSection>
      )
    }
  }

  render() {

    return (
      <TouchableWithoutFeedback onPress={ () =>
        this.props.selectLibrary(this.props.library.id) }>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{this.props.library.title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = (state, ownProps) => {
  const showDescription = (state.selectedLibraryId === ownProps.library.id)
  return { showDescription: showDescription }
}

export default connect(mapStateToProps, actions)(ListItem)
