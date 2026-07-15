import {
    syncVersion
}
from './SyncVersion.mjs';

/**
 * Semantic Release prepare plugin.
 */
export async function prepare() {

    await syncVersion();

}