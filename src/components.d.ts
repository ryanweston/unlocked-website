declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UButton: typeof import('@unlocked/foundation')['UButton']
    UDropdown: typeof import('@unlocked/foundation')['UDropdown']
    UDropdownItem: typeof import('@unlocked/foundation')['UDropdownItem']
    UMenu: typeof import('@unlocked/foundation')['UMenu']
    UMenuItem: typeof import('@unlocked/foundation')['UMenuItem']
    UTooltip: typeof import('@unlocked/foundation')['UTooltip']
    ULink: typeof import('@unlocked/foundation')['ULink']
    UIcon: typeof import('@unlocked/foundation')['UIcon']
    UHeadline: typeof import('@unlocked/foundation')['UHeadline']
    UTitle: typeof import('@unlocked/foundation')['UTitle']
    USubtitle: typeof import('@unlocked/foundation')['Subtitle']
    UBody: typeof import('@unlocked/foundation')['UBody']
    UFooter: typeof import('@unlocked/foundation')['UFooter']
  }
}

export {}
