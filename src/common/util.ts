export const generateElementId = (prefixId: string, suffixId: string, childId?: string): string =>
    childId ? `${prefixId}-${suffixId}-${childId}` : `${prefixId}-${suffixId}`;
