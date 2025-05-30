import { SegmentedControl, Loader } from '@mantine/core';
import classes from './JobFilter.module.css';
import { useSubmit, useNavigation } from '@remix-run/react';

const jobAreas = ['All', 'Writer', 'Singer', 'Actor', 'Painter'];

type JobFilterProps = {
    selectedJob?: string | null;
}

export function JobFilter({
    selectedJob
}: JobFilterProps) {
    const submit = useSubmit();
    const navigation = useNavigation();
    
    // Check if we're currently navigating and the job parameter is changing
    const isJobFiltering = navigation.state === 'loading' && 
        navigation.location && 
        (new URLSearchParams(navigation.location.search).get('job') !== selectedJob ||
         (!new URLSearchParams(navigation.location.search).has('job') && selectedJob !== null));

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
        <div className={classes.segmentedControl} style={{ '--opacity': isJobFiltering ? 0.6 : 1 } as React.CSSProperties}>
            <SegmentedControl
                radius="xl"
                size="md"
                data={jobAreas}
                classNames={classes}
                onChange={handleJobChange}
                value={selectedJob || 'All'}
                disabled={isJobFiltering}
            />
            {isJobFiltering && (
                <div className={classes.loaderOverlay}>
                    <Loader size="sm" />
                </div>
            )}
        </div>
    );
}
