import { Form } from "react-router-dom";
import { useEffect, useRef } from "react";
import styles from "./SearchField.module.css";
import { IconSearch } from '@tabler/icons-react';
import { Loader, TextInput, } from '@mantine/core';

type SearchFieldProps = {
    query: string | null;
    searching: boolean;
    onSearch: (form: HTMLFormElement) => void;
};

export function SearchField({ query, searching, onSearch }: SearchFieldProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = query || '';
        }
    }, [query]);

    return (
        <Form>
            <TextInput
                className={styles.input}
                radius="xl"
                size="lg"
                placeholder="Search people"
                rightSectionWidth={42}
                type="search"
                name="query"
                defaultValue={query || ''}
                onChange={e => {
                    onSearch(e.currentTarget.form!);
                }}
                leftSection={<IconSearch size={18} stroke={1.5} />}
                rightSection={searching ? <Loader size='sm' /> : null}
            />
        </Form>
    );
}