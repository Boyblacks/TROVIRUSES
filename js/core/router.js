// TROVIRUSES
// Application navigation router.
//
// The router controls which main section is active.
// Section-specific UI and logic must remain inside
// their own modules.

const AppRouter = {
    currentSection: "home",

    navigate(section) {
        this.currentSection = section;

        emitEvent("navigation:change", {
            section
        });
    },

    getCurrentSection() {
        return this.currentSection;
    }
};
