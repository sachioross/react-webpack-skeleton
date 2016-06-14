import React from 'react';
import { Row, Col } from 'react-flex-proto';
import { Page, Panel, Input, Select, Textarea, Switch } from 'react-blur-admin';

export class InputDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      switches: _.fill(Array(5), true),
    };
  }

  onCloseModal(modalName) {
    this.setState({ [modalName]: false });
  }

  onRenderModal(modalName) {
    this.setState({ [modalName]: true });
  }

  onTextChange(key, event) {
    this.setState({ [key]: event.currentTarget.value });
  }

  onSwitchChange(index) {
    let switches = this.state.switches;
    switches[index] = !switches[index];
    this.setState({ switches });
  }

  render() {
    return (
      <Page title='Inputs'>
        <Row>
          <Col>
            <Panel title='Text Inputs'>
              <Input
                onChange={e => this.onTextChange('success', e)}
                onValidate={e => true}
                label='Success'
                value={this.state.success} />

              <Input
                onChange={e => this.onTextChange('success2', e)}
                onValidate={e => true}
                label='Success No Icon'
                hasFeedbackIcon={false}
                value={this.state.success2} />

              <Input
                onChange={e => this.onTextChange('fail', e)}
                onValidate={e => false}
                label='Error'
                value={this.state.fail} />

              <Input
                onChange={e => this.onTextChange('warning', e)}
                onValidate={e => 'warning'}
                label='Warning'
                value={this.state.warning} />

              <Input
                onValidate={e => true}
                label='Addon Left'
                addonLeft={<i className='fa fa-check' />}
                value={this.state.addonLeft}
                onChange={e => this.onTextChange('addonLeft', e)} />

              <Input
                onValidate={e => true}
                label='Addon Right'
                addonRight={<i className='fa fa-check' />}
                value={this.state.addonRight}
                onChange={e => this.onTextChange('addonRight', e)} />

              <Input
                label='Disabled'
                disabled={true}
                value='Disabled'
                onChange={e => {}} />

              <Input
                label='Placeholder'
                placeholder='Enter Address'
                onChange={e => this.onTextChange('address', e)}
                value={this.state.address} />

              <Input
                label='With Help Block'
                placeholder='Enter Credit Card'
                helpLabel='Do not enter spaces.'
                onChange={e => this.onTextChange('creditCard', e)}
                value={this.state.creditCard} />
            </Panel>
          </Col>
          <Col>
            <Panel title='Select Dropdowns'>
              <Select
                placeholder='Standard Select'
                value={this.state.selectOne}
                options={[ { value: 1, label: 'One' } ]}
                onChange={value => this.setState({ selectOne: value })} />

              <Select
                placeholder='With Search'
                isSearchable={true}
                options={[
                  { value: 1, label: 'One' },
                  { value: 2, label: 'Two' },
                  { value: 3, label: 'Three' },
                  { value: 4, label: 'Four' },
                  { value: 5, label: 'Five' },
                  { value: 6, label: 'Six' },
                ]}
                onChange={value => this.setState({ selectTwo: value })}
                value={this.state.selectTwo} />
            </Panel>
          </Col>
          <Col>
            <Panel title='Checkboxes'>
              <Input
                type='checkbox'
                onValidate={e => 'warning'}
                label='Warning'
                onChange={e => {}} />

              <Input
                type='checkbox'
                onValidate={e => true}
                label='Success'
                onChange={e => {}} />

              <Input
                type='checkbox'
                onValidate={e => false}
                label='Error'
                onChange={e => {}} />

              <Input
                type='checkbox'
                label='No validation'
                onChange={e => {}} />

              <Input
                type='checkbox'
                disabled={true}
                label='Disabled'
                onChange={e => {}} />
            </Panel>
          </Col>
          <Col>
            <Panel title='Radio Buttons'>
              <Input
                type='radio'
                name='firstSet'
                label='Option 1'
                onChange={e => {}} />

              <Input
                type='radio'
                name='firstSet'
                label='Option 2'
                onChange={e => {}} />

              <Input
                type='radio'
                name='firstSet'
                label='Option 3'
                onChange={e => {}} />

              <Input
                type='radio'
                name='firstSet'
                disabled={true}
                label='Option 4'
                onChange={e => {}} />
            </Panel>
          </Col>
          <Col>
            <Panel title='Textarea'>
              <Textarea
                name='textarea'
                placeholder='Default Input'
                label='Text Area Label'
                onChange={e => this.onTextChange('textarea', e)}
                value={this.state.textarea} />
            </Panel>
          </Col>
          <Col>
            <Panel>
              <Row>
                <Col grow={false}>
                  <Switch type='primary' isOn={this.state.switches[0]} onChange={e => this.onSwitchChange(0)}/>
                </Col>
                <Col grow={false}>
                  <Switch type='warning' isOn={this.state.switches[1]} onChange={e => this.onSwitchChange(1)}/>
                </Col>
                <Col grow={false}>
                  <Switch type='danger' isOn={this.state.switches[2]} onChange={e => this.onSwitchChange(2)}/>
                </Col>
                <Col grow={false}>
                  <Switch type='info' isOn={this.state.switches[3]} onChange={e => this.onSwitchChange(3)}/>
                </Col>
                <Col grow={false}>
                  <Switch type='success' isOn={this.state.switches[4]} onChange={e => this.onSwitchChange(4)}/>
                </Col>
              </Row>
            </Panel>
          </Col>
        </Row>
      </Page>
    );
  }
}
