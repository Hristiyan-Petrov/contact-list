import { SegmentedControl } from '@mantine/core';
import classes from './JobFilter.module.css';
import { useSubmit } from '@remix-run/react';
import { JobType } from '@prisma/client';

type JobFilterProps = {
    selectedJob?: JobType | null;
    searching: boolean;
};

const jobTypeLabels: Record<JobType | 'All', string> = {
    'All': 'All',
    [JobType.WRITER]: "Writer",
    [JobType.ACTOR]: 'Actor',
    [JobType.SINGER]: 'Singer',
    [JobType.PAINTER]: 'Painter'
};

const jobAreas = Object.values(jobTypeLabels);

export function JobFilter({
    selectedJob,
    searching
}: JobFilterProps) {
    const submit = useSubmit();

    // Convert selectedJob enum to display label
    const getDisplayValue = (job: JobType | null | undefined): string => {
        if (!job) return 'All';
        return jobTypeLabels[job as JobType] || 'All';
    };

    // Convert display label back to enum
    const getEnumValue = (displayValue: string): string | null => {
        if (displayValue === 'All') return null;

        const enumEntry = Object.entries(jobTypeLabels).find(
            ([, label]) => label === displayValue
        );
        return enumEntry?.[0] === 'All' ? null : enumEntry?.[0] || null;
    };

    const handleJobChange = (value: string) => {
        const currentParams = new URLSearchParams(window.location.search);
        const enumValue = getEnumValue(value);

        if (value === 'All') {
            currentParams.delete('job');
        } else {
            if (enumValue) {
                currentParams.set('job', enumValue);
            }
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
                value={getDisplayValue(selectedJob)}
                disabled={searching}
                style={{
                    opacity: searching ? 0.6 : 1,
                    transition: 'opacity 0.2s ease'
                }}
            />
        </div>
    );
}
