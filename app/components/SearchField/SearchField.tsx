import { Form, useSubmit } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import styles from "./SearchField.module.css";
import { IconSearch } from '@tabler/icons-react';
import { CloseButton, TextInput } from '@mantine/core';

type SearchFieldProps = {
    query: string | null;
    searching: boolean;
};

export function SearchField({ query, searching }: SearchFieldProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const submit = useSubmit();
    const [localQuery, setLocalQuery] = useState(query || '');

    useEffect(() => {
        setLocalQuery(query || '');
        if (inputRef.current) {
            inputRef.current.value = query || '';
        }
    }, [query]);

    // Debounce the search submission
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const currentParams = new URLSearchParams(window.location.search);

            if (localQuery) {
                currentParams.set('query', localQuery);
            } else {
                currentParams.delete('query');
            }

            // Only submit if the query actually changed
            if (localQuery !== query) {
                submit(currentParams, {
                    method: 'get',
                    replace: true
                });
            }
        }, 400); // 400ms debounce

        return () => clearTimeout(timeoutId);
    }, [localQuery, submit, query]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalQuery(e.currentTarget.value);
    };

    return (
        <div className={searching ? styles.loadingCursor : ''}>
            <Form>
                <TextInput
                    className={styles.input}
                    radius="xl"
                    size="lg"
                    placeholder="Search people"
                    rightSectionWidth={42}
                    type="search"
                    name="query"
                    value={localQuery} // Use controlled input
                    onChange={handleSearch}
                    leftSection={<IconSearch size={18} stroke={1.5} />}
                    rightSection={
                        localQuery
                            ? <CloseButton size={18} onClick={() => setLocalQuery('')}/>
                            : ''
                    }
                    disabled={searching}
                    style={{
                        opacity: searching ? 0.6 : 1,
                        transition: 'opacity 0.2s ease'
                    }}
                />
            </Form>
        </div>
    );
}
