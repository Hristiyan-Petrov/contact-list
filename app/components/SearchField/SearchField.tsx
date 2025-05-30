import { Form, useSubmit } from "@remix-run/react";
import { useEffect, useRef } from "react";
import styles from "./SearchField.module.css";
import { IconSearch } from '@tabler/icons-react';
import { Loader, TextInput, } from '@mantine/core';

type SearchFieldProps = {
    query: string | null;
    searching: boolean;
};

export function SearchField({ query, searching }: SearchFieldProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const submit = useSubmit();

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = query || '';
        }
    }, [query]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentParams = new URLSearchParams(window.location.search);
        const queryValue = e.currentTarget.value;
        
        // Update or remove query parameter while preserving others
        if (queryValue) {
            currentParams.set('query', queryValue);
        } else {
            currentParams.delete('query');
        }
        
        submit(currentParams, {
            method: 'get',
            replace: true
        });
    };

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
                onChange={handleSearch}
                leftSection={<IconSearch size={18} stroke={1.5} />}
                rightSection={searching ? <Loader size='sm' /> : null}
            />
        </Form>
    );
}