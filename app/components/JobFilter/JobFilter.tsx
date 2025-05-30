import { SegmentedControl, Loader } from '@mantine/core';
import classes from './JobFilter.module.css';
import { useSubmit, useNavigation } from '@remix-run/react';

const jobAreas = ['All', 'Writer', 'Singer', 'Actor', 'Painter'];

type JobFilterProps = {
    selectedJob?: string | null;
    searching: boolean;
}

export function JobFilter({
    selectedJob,
    searching
}: JobFilterProps) {
    const submit = useSubmit();

    // const navigation = useNavigation();
    // Check if we're currently navigating and the job parameter is changing
    // const isJobFiltering = navigation.state === 'loading' &&
    //     navigation.location &&
    //     // Check if job parameter is changing
    //     (new URLSearchParams(navigation.location.search).get('job') !== selectedJob ||
    //         (!new URLSearchParams(navigation.location.search).has('job') && selectedJob !== null) ||
    //         (new URLSearchParams(navigation.location.search).has('job') && selectedJob === null));

    // const isJobFiltering = navigation.state === "loading";

    const handleJobChange = (value: string) => {
        const currentParams = new URLSearchParams(window.location.search);

        // Fix the comparison - use 'All' instead of 'all'
        if (value === 'All') {
            currentParams.delete('job');
        } else {
            currentParams.set('job', value);
        }

        submit(currentParams, {
            method: 'get',
            replace: true
        });
    };

    return (
        <div className={`${classes.segmentedControl} ${searching ? classes.loadingCursor : ''}`}>
            <SegmentedControl
                radius="xl"
                size="md"
                data={jobAreas}
                classNames={classes}
                onChange={handleJobChange}
                value={selectedJob || 'All'}
                disabled={searching}
                style={{
                    opacity: searching ? 0.6 : 1,
                    transition: 'opacity 0.2s ease'
                }}
            />
        </div>
    );
}
