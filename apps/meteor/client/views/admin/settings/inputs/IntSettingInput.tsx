import { Box, FieldLabel, FieldRow, Flex, InputBox } from '@rocket.chat/fuselage';
import type { FormEventHandler, ReactElement } from 'react';
import React from 'react';

import ResetSettingButton from '../ResetSettingButton';

type IntSettingInputProps = {
	_id: string;
	label: string;
	value: string;
	placeholder?: string;
	readonly?: boolean;
	autocomplete?: boolean;
	disabled?: boolean;
	hasResetButton?: boolean;
	onChangeValue?: (value: string | number) => void;
	onResetButtonClick?: () => void;
};

function IntSettingInput({
	_id,
	label,
	value,
	placeholder,
	readonly,
	autocomplete,
	disabled,
	onChangeValue,
	hasResetButton,
	onResetButtonClick,
}: IntSettingInputProps): ReactElement {
	const handleChange: FormEventHandler<HTMLInputElement> = (event) => {
		onChangeValue?.(parseInt(event.currentTarget.value, 10));
	};

	return (
		<>
			<Flex.Container>
				<Box>
					<FieldLabel htmlFor={_id} title={_id}>
						{label}
					</FieldLabel>
					{hasResetButton && <ResetSettingButton data-qa-reset-setting-id={_id} onClick={onResetButtonClick} />}
				</Box>
			</Flex.Container>
			<FieldRow>
				<InputBox
					data-qa-setting-id={_id}
					id={_id}
					type='number'
					value={value}
					placeholder={placeholder}
					disabled={disabled}
					readOnly={readonly}
					autoComplete={autocomplete === false ? 'off' : undefined}
					onChange={handleChange}
				/>
			</FieldRow>
		</>
	);
}

export default IntSettingInput;
