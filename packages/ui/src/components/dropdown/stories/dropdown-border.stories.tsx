/* eslint-disable no-console */
import { Fragment, h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus.js'
import { IconLayerFrame16 } from '../../../icons/icon-16/icon-layer-frame-16.js'
import { VerticalSpace } from '../../../layout/vertical-space/vertical-space.js'
import { Button } from '../../button/button.js'
import { Dropdown, DropdownOption } from '../dropdown.js'

export default {
  parameters: {
    fixedWidth: true,
    order: 2
  },
  title: 'Components/Dropdown/Border'
}

export const Empty = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Dropdown
      onChange={handleChange}
      options={options}
      value={value}
      variant="border"
    />
  )
}

export const EmptyManyOptions = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [...Array(100).keys()].map(function (
    index
  ) {
    return { value: `${index + 1}` }
  })
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Dropdown
      onChange={handleChange}
      options={options}
      value={value}
      variant="border"
    />
  )
}

export const Placeholder = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Dropdown
      onChange={handleChange}
      options={options}
      placeholder="placeholder"
      value={value}
      variant="border"
    />
  )
}

export const Filled = function () {
  const [value, setValue] = useState<string>('foo')
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Dropdown
      onChange={handleChange}
      options={options}
      value={value}
      variant="border"
    />
  )
}

export const FilledManyOptions = function () {
  const [value, setValue] = useState<string>('42')
  const options: Array<DropdownOption> = [...Array(100).keys()].map(function (
    index
  ) {
    return { value: `${index + 1}` }
  })
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Dropdown
      onChange={handleChange}
      options={options}
      value={value}
      variant="border"
    />
  )
}

export const LongText = function () {
  const [value, setValue] = useState<string>(Array(20).fill('foo').join(' '))
  const options: Array<DropdownOption> = [
    { value: Array(20).fill('foo').join(' ') },
    { value: Array(20).fill('bar').join(' ') },
    { value: Array(20).fill('baz').join(' ') },
    { separator: true },
    { header: 'Header' },
    { value: Array(4).fill('qux').join(' ') }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Dropdown
      onChange={handleChange}
      options={options}
      value={value}
      variant="border"
    />
  )
}

export const Focused = function () {
  const [value, setValue] = useState<string>('foo')
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Dropdown
      {...useInitialFocus()}
      onChange={handleChange}
      options={options}
      value={value}
      variant="border"
    />
  )
}

export const Disabled = function () {
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange() {
    throw new Error('This function should not be called')
  }
  return (
    <Dropdown
      disabled
      onChange={handleChange}
      options={options}
      value="foo"
      variant="border"
    />
  )
}

export const OptionDisabled = function () {
  const [value, setValue] = useState<string>('foo')
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { disabled: true, value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Dropdown
      onChange={handleChange}
      options={options}
      value={value}
      variant="border"
    />
  )
}

export const OptionText = function () {
  const [value, setValue] = useState<string>('a')
  const options: Array<DropdownOption> = [
    {
      text: 'foo',
      value: 'a'
    },
    { text: 'bar', value: 'b' },
    { text: 'baz', value: 'c' },
    { separator: true },
    { header: 'Header' },
    { text: 'qux', value: 'd' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Dropdown
      onChange={handleChange}
      options={options}
      value={value}
      variant="border"
    />
  )
}

export const Icon = function () {
  const [value, setValue] = useState<string>('foo')
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Dropdown
      icon={<IconLayerFrame16 />}
      onChange={handleChange}
      options={options}
      value={value}
      variant="border"
    />
  )
}

export const IconDisabled = function () {
  const [value, setValue] = useState<string>('foo')
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Dropdown
      disabled
      icon={<IconLayerFrame16 />}
      onChange={handleChange}
      options={options}
      value={value}
      variant="border"
    />
  )
}

export const IconText = function () {
  const [value, setValue] = useState<string>('foo')
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Dropdown
      icon="X"
      onChange={handleChange}
      options={options}
      value={value}
      variant="border"
    />
  )
}

export const IconTextDisabled = function () {
  const [value, setValue] = useState<string>('foo')
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Dropdown
      disabled
      icon="X"
      onChange={handleChange}
      options={options}
      value={value}
      variant="border"
    />
  )
}

export const DynamicallySetOptions = function () {
  const [value, setValue] = useState<null | string>(null)
  const [options, setOptions] = useState<Array<DropdownOption>>([
    { value: 'foo' }
  ])
  function handleClick() {
    setOptions([
      { value: 'foo' },
      { value: 'bar' },
      { value: 'baz' },
      { separator: true },
      { header: 'Header' },
      { value: 'qux' }
    ])
  }
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Fragment>
      <Button onClick={handleClick}>Set</Button>
      <VerticalSpace space="small" />
      <Dropdown
        onChange={handleChange}
        options={options}
        placeholder="placeholder"
        value={value}
        variant="border"
      />
    </Fragment>
  )
}

export const FlexParent = function () {
  const [valueA, setValueA] = useState<string>(Array(20).fill('foo').join(' '))
  const optionsA: Array<DropdownOption> = [
    { value: Array(20).fill('foo').join(' ') },
    { value: 'bar' }
  ]
  function handleChangeA(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValueA(newValue)
  }
  const [valueB, setValueB] = useState<string>('qux')
  const optionsB: Array<DropdownOption> = [
    { value: Array(20).fill('baz').join(' ') },
    { value: 'qux' }
  ]
  function handleChangeB(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValueB(newValue)
  }
  const style = { display: 'flex' }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChangeA}
        options={optionsA}
        value={valueA}
        variant="border"
      />
      )
      <Dropdown
        onChange={handleChangeB}
        options={optionsB}
        value={valueB}
        variant="border"
      />
      )
    </div>
  )
}

export const OnValueChange = function () {
  const [value, setValue] = useState<string>('foo')
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleValueChange(newValue: string) {
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Dropdown
      onValueChange={handleValueChange}
      options={options}
      value={value}
      variant="border"
    />
  )
}

export const TopLeft = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = {
    left: '-24px',
    position: 'absolute',
    top: '-12px',
    width: '240px'
  }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChange}
        options={options}
        value={value}
        variant="border"
      />
    </div>
  )
}

export const TopLeftManyOptions = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [...Array(100).keys()].map(function (
    index
  ) {
    return { value: `${index + 1}` }
  })
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = {
    left: '-24px',
    position: 'absolute',
    top: '-12px',
    width: '240px'
  }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChange}
        options={options}
        value={value}
        variant="border"
      />
    </div>
  )
}

export const TopRight = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = {
    position: 'absolute',
    right: '-24px',
    top: '-12px',
    width: '240px'
  }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChange}
        options={options}
        value={value}
        variant="border"
      />
    </div>
  )
}

export const TopRightManyOptions = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [...Array(100).keys()].map(function (
    index
  ) {
    return { value: `${index + 1}` }
  })
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = {
    position: 'absolute',
    right: '-24px',
    top: '-12px',
    width: '240px'
  }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChange}
        options={options}
        value={value}
        variant="border"
      />
    </div>
  )
}

export const MiddleLeft = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = {
    left: '-24px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '240px'
  }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChange}
        options={options}
        value={value}
        variant="border"
      />
    </div>
  )
}

export const MiddleLeftManyOptions = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [...Array(100).keys()].map(function (
    index
  ) {
    return { value: `${index + 1}` }
  })
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = {
    left: '-24px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '240px'
  }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChange}
        options={options}
        value={value}
        variant="border"
      />
    </div>
  )
}

export const MiddleRight = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = {
    position: 'absolute',
    right: '-24px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '240px'
  }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChange}
        options={options}
        value={value}
        variant="border"
      />
    </div>
  )
}

export const MiddleRightManyOptions = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [...Array(100).keys()].map(function (
    index
  ) {
    return { value: `${index + 1}` }
  })
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = {
    position: 'absolute',
    right: '-24px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '240px'
  }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChange}
        options={options}
        value={value}
        variant="border"
      />
    </div>
  )
}

export const BottomLeft = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = {
    bottom: '-12px',
    left: '-24px',
    position: 'absolute',
    width: '240px'
  }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChange}
        options={options}
        value={value}
        variant="border"
      />
    </div>
  )
}

export const BottomLeftManyOptions = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [...Array(100).keys()].map(function (
    index
  ) {
    return { value: `${index + 1}` }
  })
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = {
    bottom: '-12px',
    left: '-24px',
    position: 'absolute',
    width: '240px'
  }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChange}
        options={options}
        value={value}
        variant="border"
      />
    </div>
  )
}

export const BottomRight = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = {
    bottom: '-12px',
    position: 'absolute',
    right: '-24px',
    width: '240px'
  }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChange}
        options={options}
        value={value}
        variant="border"
      />
    </div>
  )
}

export const BottomRightManyOptions = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [...Array(100).keys()].map(function (
    index
  ) {
    return { value: `${index + 1}` }
  })
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = {
    bottom: '-12px',
    position: 'absolute',
    right: '-24px',
    width: '240px'
  }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChange}
        options={options}
        value={value}
        variant="border"
      />
    </div>
  )
}
