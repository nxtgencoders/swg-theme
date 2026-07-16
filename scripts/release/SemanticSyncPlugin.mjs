import {
    syncVersion
}
from './SyncVersion.mjs';

/**
 * Semantic Release prepare plugin.
 */
export async function prepare(
    {},
    context
) {

    await syncVersion(
        context.nextRelease.version
    );

}