/**
 * TypeScript type definitions for Facebook Graph API version 2.8
 * https://developers.facebook.com/docs/graph-api/reference
 *
 * Definitions by: Alex Siman <https://github.com/siman>
 */
declare module FbGraphApi {

  export type FbDateTime = string;

  export type FbProfile = 
    FbUser | FbPage | FbGroup | FbEvent | FbApp;

  export type FbPrivacy = 
    "CLOSED" | "OPEN" | "SECRET";

  export type FbAlbumType =
    "app" | "cover" | "profile" | "mobile" | "wall" | "normal" | "album";
  
  export type FbEntityAtTextRangeType =
    "user" | "page" | "event" | "group" | "application";

  export type FbPriceRange =
    "$" | "$$" | "$$$" | "$$$$" | "Unspecified";

  export type FbVideoStatusEnum =
    "ready" | "processing" | "error";

  export interface FbUser {
    id: string;
    about: string;
    admin_notes: FbPageAdminNote[];
    age_range: FbAgeRange;
    birthday: string;
    can_review_measurement_request: boolean;
    context: FbUserContext;
    cover: FbCoverPhoto;
    currency: FbCurrency;
    devices: FbUserDevice[];
    education: FbEducationExperience[];
    email: string;
    employee_number: string;
    favorite_athletes: FbExperience[];
    favorite_teams: FbExperience[];
    first_name: string;
    gender: string;
    hometown: FbPage;
    inspirational_people: FbExperience[];
    install_type: string; // Originally 'enum' on FB API docs.
    installed: boolean;
    interested_in: string[];
    is_shared_login: boolean;
    is_verified: boolean;
    labels: FbPageLabel[];
    languages: FbExperience[];
    last_name: string;
    link: string;
    locale: string;
    location: FbPage;
    meeting_for: string[];
    middle_name: string;
    name: string;
    name_format: string;
    payment_pricepoints: FbPaymentPricepoints;
    political: string;
    public_key: string;
    quotes: string;
    relationship_status: string;
    religion: string;
    security_settings: FbSecuritySettings;
    shared_login_upgrade_required_by: string;
    significant_other: FbUser;
    sports: FbExperience[];
    test_group: number;
    third_party_id: string;
    timezone: number;
    token_for_business: string;
    updated_time: FbDateTime;
    verified: boolean;
    video_upload_limits: FbVideoUploadLimits;
    viewer_can_send_gift: boolean;
    website: string;
    work: FbWorkExperience[];
  }

  export interface FbWorkExperience {
    id: string;
    description: string;
    employer: FbPage;
    end_date: string;
    from: FbUser;
    location: FbPage;
    position: FbPage;
    projects: FbProjectExperience[];
    start_date: string;
    with: FbUser[];
  }

  export interface FbProjectExperience {
    id: string;
    description: string;
    end_date: string;
    from: FbUser;
    name: string;
    start_date: string;
    with: FbUser[];
  }

  export interface FbVideoUploadLimits {
    length: number;
    size: number;
  }

  export interface FbSecuritySettings {
    secure_browsing: FbSecureBrowsing;
  }

  export interface FbSecureBrowsing {
    enabled: boolean;
  }

  export interface FbPaymentPricepoints {
    mobile: FbPaymentPricepoint[];
  }

  export interface FbPaymentPricepoint {
    credits: number;
    local_currency: string;
    user_price: string;
  }

  export interface FbPageLabel {
    creation_time: FbDateTime;
    creator_id: FbProfile;
    from: FbPage;
    id: string;
    name: string;
  }

  export interface FbPageInsights {
    period: "day" | "week" | "days_28" | "month" | "lifetime"
    metric: any[]
    since: FbDateTime
    until: FbDateTime
  }

  export interface FbExperience {
    id: string;
    description: string;
    from: FbUser;
    name: string;
    with: FbUser[];
  }

  export interface FbEducationExperience {
    id: string;
    classes: FbExperience[];
    concentration: FbPage[];
    degree: FbPage;
    school: FbPage;
    type: string;
    with: FbUser[];
    year: FbPage;
  }

  export interface FbUserDevice {
    hardware: string;
    os: string;
  }

  export interface FbCurrency {
    currency_offset: number;
    usd_exchange: number;
    usd_exchange_inverse: number;
    user_currency: string;
  }

  export interface FbUserContext {
    id: string;
  }

  export interface FbPageAdminNote {
    body: string;
    from: FbPage;
    id: string;
    user: FbUser;
  }

  export interface FbAgeRange {
    max: number;
    min: number;
  }

  export interface FbPage {
    id: string;
    about: string;
    access_token: string;
    ad_campaign: FbAdCampaign;
    affiliation: string;
    app_id: string;
    app_links: FbAppLinks;
    artists_we_like: string;
    attire: string;
    awards: string;
    band_interests: string;
    band_members: string;
    best_page: FbPage;
    bio: string;
    birthday: string;
    booking_agent: string;
    built: string;
    business: any; // Undocumented type.
    can_checkin: boolean;
    can_post: boolean;
    category: string;
    category_list: FbPageCategory[];
    checkins: number;
    company_overview: string;
    contact_address: FbMailingAddress;
    context: FbOpenGraphContext;
    country_page_likes: number;
    cover: FbCoverPhoto;
    culinary_team: string;
    current_location: string;
    description: string;
    description_html: string;
    directed_by: string;
    display_subtext: string;
    displayed_message_response_time: string;
    emails: string[];
    engagement: FbEngagement[]
    fan_count: number;
    featured_video: FbVideo;
    features: string;
    food_styles: string[];
    founded: string;
    general_info: string;
    general_manager: string;
    genre: string;
    global_brand_page_name: string;
    global_brand_root_id: string;
    has_added_app: boolean;
    hometown: string;
    hours: Map<string, string>;
    impressum: string;
    influences: string;
    instant_articles_review_status: string;
    is_always_open: boolean;
    is_community_page: boolean;
    is_permanently_closed: boolean;
    is_published: boolean;
    is_unclaimed: boolean;
    is_verified: boolean;
    is_webhooks_subscribed: boolean;
    leadgen_form_preview_details: any; // Undocumented type: LeadGenFormPreviewDetails.
    leadgen_tos_acceptance_time: FbDateTime;
    leadgen_tos_accepted: boolean;
    leadgen_tos_accepting_user: FbUser;
    link: string;
    location: FbLocation;
    members: string;
    merchant_id: string;
    merchant_review_status: string;
    mission: string;
    mpg: string;
    name: string;
    name_with_location_descriptor: string;
    network: string;
    new_like_count: string;
    offer_eligible: boolean;
    overall_star_rating: number;
    parent_page: FbPage;
    parking: FbPageParking;
    payment_options: FbPagePaymentOptions;
    personal_info: string;
    personal_interests: string;
    pharma_safety_info: string;
    phone: string;
    place_type: string;
    plot_outline: string;
    preferred_audience: FbTargeting;
    press_contact: string;
    price_range: FbPriceRange;
    produced_by: string;
    products: string;
    promotion_eligible: boolean;
    promotion_ineligible_reason: string;
    public_transit: string;
    publisher_space: any; // Undocumented type: PublisherSpace.
    rating_count: number;
    recipient: string;
    record_label: string;
    release_date: string;
    restaurant_services: FbPageRestaurantServices;
    restaurant_specialties: FbPageRestaurantSpecialties;
    schedule: string;
    screenplay_by: string;
    season: string;
    single_line_address: string;
    starring: string;
    start_info: FbPageStartInfo;
    store_location_descriptor: string;
    store_number: number;
    studio: string;
    supports_instant_articles: boolean;
    talking_about_count: number;
    unread_message_count: number;
    unread_notif_count: number;
    unseen_message_count: number;
    username: string;
    verification_status: string;
    voip_info: FbVoipInfo;
    website: string;
    were_here_count: number;
    written_by: string;
  }

  export interface FbVoipInfo {
    has_mobile_app: boolean;
    has_permission: boolean;
    is_callable: boolean;
    is_callable_webrtc: boolean;
    is_pushable: boolean;
    reason_code: number;
    reason_description: string;
  }

  export interface FbPageStartInfo {
    date: FbPageStartDate;
    type: string;
  }

  export interface FbPageStartDate {
    day: number;
    month: number;
    year: number;
  }

  // TODO check number vs bool (use API explorer)
  export interface FbPageRestaurantSpecialties {
    breakfast: number;
    coffee: number;
    dinner: number;
    drinks: number;
    lunch: number;
  }

  // TODO check number vs bool (use API explorer)
  export interface FbPageRestaurantServices {
    catering: number;
    delivery: number;
    groups: number;
    kids: number;
    outdoor: number;
    pickup: number;
    reserve: number;
    takeout: number;
    waiter: number;
    walkins: number;
  }

  export interface FbTargeting {
    // TODO impl: big complex object
  }

  // TODO check number vs bool (use API explorer)
  export interface FbPagePaymentOptions {
    amex: number;
    cash_only: number;
    discover: number;
    mastercard: number;
    visa: number;
  }

  // TODO check number vs bool (use API explorer)
  export interface FbPageParking {
    lot: number
    street: number
    valet: number
  }

  export interface FbVideo {
    backdated_time_granularity: string
    content_category: string
    created_time: FbDateTime
    description: string
    embed_html: string
    id: string
    backdated_time: FbDateTime
    content_tags: string[]
    embeddable: boolean
    event: FbEvent
    format: FbVideoFormat[]
    from: FbProfile
    icon: string
    is_crossposting_eligible: boolean
    is_instagram_eligible: boolean
    is_reference_only: boolean
    length: number
    live_status: string
    permalink_url: string
    picture: string
    place: FbPlace
    privacy: FbPrivacy
    published: boolean
    scheduled_publish_time: FbDateTime
    source: string
    status: FbVideoStatus
    title: string
    universal_video_id: string
    updated_time: FbDateTime
  }

  export interface FbLiveVideo {
    id: string
    broadcast_start_time: FbDateTime
    copyright: FbVideoCopyright
    creation_time: FbDateTime
    dash_preview_url: string
    description: string
    embed_html: string
    from: FbProfile
    is_manual_mode: boolean
    is_reference_only: boolean
    live_views: number
    motion_detection_settings: any // Undocumented type: MotionDetection
    permalink_url: string
    planned_start_time: FbDateTime
    preview_url: string
    seconds_left: number
    secure_stream_url: string
    status: string
    stream_url: string
    title: string
    video: FbVideo
  }

  export interface FbVideoCopyright {
    id: string
    copyright_content_id: string
    creator: FbUser
    monitoring_status: "NOT_EXAMED" | "COPYRIGHTED" | "ERROR"
    monitoring_type: string
    ownership_countries: string[]
    reference_owner_id: string
    rule_ids: FbVideoCopyrightRule[]
    whitelisted_ids: string[]
  }

  export interface FbVideoCopyrightRule {
    id: string
    condition_groups: any // Undocumented type: VideoCopyrightConditionGroup
    copyrights: string[]
    created_date: FbDateTime
    creator: FbUser
    name: string
  }

  export interface FbVideoList {
    id: string
    creation_time: FbDateTime
    description: string
    last_modified: FbDateTime
    owner: FbUser | FbPage
    title: string
  }

  export interface FbVideoStatus {
    processing_progress: number;
    video_status: FbVideoStatusEnum;
  }

  export interface FbVideoFormat {
    embed_html: string;
    filter: string;
    height: number;
    picture: string;
    width: number;
  }

  export interface FbEngagement {
    count: number;
    count_string: string;
    count_string_with_like: string;
    count_string_without_like: string;
    social_sentence: string;
    social_sentence_with_like: string;
    social_sentence_without_like: string;
  }

  export interface FbOpenGraphContext {
    id: string;
  }

  export interface FbMailingAddress {
    id: string;
    city: string;
    city_page: FbPage;
    country: string;
    postal_code: string;
    region: string;
    street1: string;
    street2: string;
  }

  export interface FbMediaFingerprint {
    id: string
    duration_in_sec: number
    fingerprint_content_type: string
    fingerprint_type: string
    metadata: any // Undocumented type: FingerprintMetadata
    title: string
    universal_content_id: string
  }

  export interface FbPageCategory {
    id: string;
    name: string;
  }

  export interface FbAppLinkHost {
    name: string;
    canonical_url: string;
    android: FbAndroidAppLink[];
    ios: FbIosAppLink[];
    ipad: FbIosAppLink[];
    iphone: FbIosAppLink[];
    web: FbWebAppLink;
    windows_phone: FbWindowsPhoneAppLink[];
  }

  export interface FbAppLinks {
    id: string;
    android: FbAndroidAppLink[];
    ios: FbIosAppLink[];
    ipad: FbIosAppLink[];
    iphone: FbIosAppLink[];
    web: FbWebAppLink;
    windows: FbWindowsAppLink[];
    windows_phone: FbWindowsPhoneAppLink[];
    windows_universal: FbWindowsAppLink[];
  }

  export interface FbWebAppLink {
    should_fallback: boolean;
    url: string;
  }

  export interface FbAndroidAppLink {
    app_name: string;
    class: string;
    package: string;
    url: string;
  }

  export interface FbIosAppLink {
    app_name: string;
    app_store_id: string;
    url: string;
  }

  export interface FbWindowsPhoneAppLink {
    app_id: string;
    app_name: string;
    url: string;
  }

  export interface FbWindowsAppLink {
    app_id: string;
    app_name: string;
    package_family_name: string;
    url: string;
  }

  export interface FbAdCampaign {
    // TODO impl
  }

  export interface FbApp {
    // TODO impl
  }

  export interface FbRequest {
    id: string
    application: FbApp
    to: FbUser
    from: FbUser
    message: string
    created_time: FbDateTime
  }

  export interface FbPlace {
    id: string;
    location: FbLocation;
    name: string;
    overall_rating: number;
  }

  export interface FbPlaceTag {
    id: string
    created_time: FbDateTime
    place: FbPage
  }

  export interface FbPlaceTopic {
    id: string
    count: number
    has_children: boolean
    icon_url: string
    name: string
    parent_ids: string[]
    plural_name: string
    top_subtopic_names: string[]
  }

  /**
   * A cover photo for objects in the Graph API. Cover photos are used with Events, Groups,
   * Pages and People.
   */
  export interface FbCoverPhoto {

    /** The ID of the cover photo. */
    id: string

    /** When non-zero, the cover image overflows horizontally. The value indicates
     * the offset percentage of the total image width from the left [0-100].
     */
    offset_x: number

    /** When non-zero, the cover photo overflows vertically. The value indicates
     * the offset percentage of the total image height from the top [0-100].
     */
    offset_y: number

    /** Direct URL for the person's cover photo image. */
    source: string
  }

  export interface FbGroup {
    id: string;
    cover: FbCoverPhoto;
    description: string;
    email: string;
    icon: string;
    link: string;
    member_request_count: number;
    name: string;
    owner: FbUser | FbPage;
    parent: FbGroup | FbPage | FbApp;
    privacy: FbPrivacy;
    updated_time: FbDateTime;
  }

  export interface FbGroupDoc {
    id: string
    from: FbUser | FbPage
    subject: string
    message: string
    icon: string
    created_time: FbDateTime
    updated_time: FbDateTime
    revision: number
    can_edit: boolean
    can_delete: boolean
  }

  export interface FbInstagramComment {
    comment_type: "CAPTION" | "NORMAL" | "UNKNOWN"
    created_at: FbDateTime
    id: string
    instagram_comment_id: string
    instagram_user: FbInstagramUser
    mentioned_instagram_users: FbInstagramUser[]
    message: string
  }

  export interface FbInstagramUser {
    id: string
    follow_count: number
    followed_by_count: number
    has_profile_picture: boolean
    is_private: boolean
    media_count: number
    profile_pic: string
    username: string
  }

  export interface FbLifeEvent {
    created_time: FbDateTime
    description: string
    end_time: FbDateTime
    from: FbPage
    id: string
    is_hidden: boolean
    start_time: FbDateTime
    title: string
    updated_time: FbDateTime
  }

  /** Location node used with other objects in the Graph API. */
  export interface FbLocation {
    city: string;
    city_id: number;
    country: string;
    country_code: string;
    latitude: number;
    located_in: string;
    longitude: number;
    name: string;
    region: string;
    region_id: number;
    state: string;
    street: string;
    zip: string;
  }

  export interface FbEventOwner {
    id: string;
    name: string;
  }

  export interface FbEvent {
    id: string;
    //category: enum // TODO Resolve enum.
    cover: FbCoverPhoto;
    description: string;
    //type: enum; // TODO Resolve enum.
    end_time: FbDateTime;
    is_viewer_admin: boolean;
    is_page_owned: boolean;
    can_guests_invite: boolean;
    guest_list_enabled: boolean;
    name: string;
    owner: FbEventOwner;
    parent_group: FbGroup;
    place: FbPlace;
    start_time: FbDateTime;
    ticket_uri: string;
    //timezone: enum; // TODO Resolve
    updated_time: FbDateTime;
    attending_count: number;
    declined_count: number;
    maybe_count: number;
    noreply_count: number;
    interested_count: number;
  }

  /** An individual unread Facebook notification */
  export interface FbNotification {
    id: string;
    from: FbUser | FbPage | FbApp;
    to: FbUser;
    created_time: FbDateTime;
    updated_time: FbDateTime;
    title: string;
    link: string;
    application: FbApp;
    unread: number;
    object: any;
  }

  export interface FbAchievement {
    id: string
    from: FbUser
    publish_time: FbDateTime
    application: FbApp
    data: FbAchievementData
    type: "games.achievement" // FB doc says the value always is "games.achievement"
    no_feed_story: boolean
  }

  export interface FbAchievementData {
    achievement: FbAchievementType
    importance: number
  }

  export interface FbAchievementType {
    id: string
    type: "games.achievement" // FB doc says the value always is "games.achievement"
    title: string
    url: string
    description: string
    image: FbAchievementTypeImage
    data: FbAchievementTypeData
    updated_time: FbDateTime
    created_time: FbDateTime
    application: FbApp
    context: any[] // Unclear from docs: array containing the 'display_order'
    is_scraped: boolean
  }

  export interface FbAchievementTypeImage {
    url: string
    width: number
    height: number
  }

  export interface FbAchievementTypeData {
    points: number
  }

  export interface FbAlbum {
    id: string;
    can_upload: boolean;
    count: number;
    cover_photo: FbPhoto;
    created_time: FbDateTime;
    description: string;
    event: FbEvent;
    from: FbUser;
    link: string;
    location: string;
    name: string;
    place: FbPage;
    privacy: string;
    type: FbAlbumType;
    updated_time: FbDateTime;
  }

  /** Represents an individual photo on Facebook. */
  export interface FbPhoto {
    id: string;
    album: FbAlbum;
    backdated_time: FbDateTime;
    backdated_time_granularity: any;
    can_backdate: boolean;
    can_delete: boolean;
    can_tag: boolean;
    created_time: FbDateTime;
    event: FbEvent;
    from: FbUser | FbPage;
    height: number;
    icon: string;
    images: FbPlatformImageSource[];
    link: string;
    name: string;
    name_tags: FbEntityAtTextRange[];
    page_story_id: string;
    picture: string;
    place: FbPlace;
    target: FbProfile;
    updated_time: FbDateTime;
    webp_images: FbPlatformImageSource[];
    width: number;
  }

  export interface FbPlatformImageSource {
    height: number;
    source: string;
    width: number;
  }

  export interface FbEntityAtTextRange {
    id: string;
    length: number;
    name: string;
    object: FbProfile;
    offset: number;
    type: FbEntityAtTextRangeType;
  }

  export interface FbPromotionInfo {
    budget: number
    currency: string
    spent: number
  }

  export interface FbSavedMessageResponse {
    id: string
    category: string
    image: string
    is_enabled: boolean
    message: string
    title: string
  }

  export interface FbPost {
    id: string
    admin_creator: FbPostAdminCreator
    application: FbApp
    call_to_action: {
      context: Object
    }
    caption: string
    created_time: FbDateTime
    description: string
    feed_targeting: FbPostFeedTargeting
    from: FbProfile
    icon: string
    instagram_eligibility: string
    is_hidden: boolean
    is_instagram_eligible: string | boolean // Maybe typo in docs? Looks like it should be 'boolean'.
    is_published: boolean
    link: string
    message: string
    message_tags: any // Unclear
    name: string
    object_id: string
    parent_id: string
    permalink_url: string
    picture: string
    place: FbPlace
    privacy: FbPostPrivacy
    properties: FbPostProperty[]
    shares: any | number // Unclear: object
    source: string
    status_type: FbPostStatusType
    story: string
    targeting: FbPostTargeting
    to: FbProfile[]
    type: FbPostType
    updated_time: FbDateTime
    with_tags: Object
  }

  export type FbPostType = "link" | "status" | "photo" | "video" | "offer";

  export interface FbPostFeedTargeting {
    age_max: number
    age_min: number
    cities: number[]
    college_years: number[]
    countries: string[]
    education_statuses: number[]
    genders: number[]
    interested_in: number[]
    interests: number[]
    locales: number[]
    regions: number[]
    relationship_statuses: number[]
  }

  export interface FbPostTargeting {
    countries: string[]
    locales: number[]
    regions: number[]
    cities: number[]
  }

  export type FbPostStatusType =
    "mobile_status_update" | "created_note" | "added_photos" | "added_video" | "shared_story" |
    "created_group" | "created_event" | "wall_post" | "app_created_story" | "published_story" |
    "tagged_in_photo" | "approved_friend"
  ;
  
  export interface FbPostProperty {
    name: string
    text: string
    href: string
  }

  export interface FbPostPrivacy {
    description: string
    value: "EVERYONE" | "ALL_FRIENDS" | "FRIENDS_OF_FRIENDS" | "SELF" | "CUSTOM"
    friends: "ALL_FRIENDS" | "FRIENDS_OF_FRIENDS" | "SOME_FRIENDS"
    allow: any | string // Unclear: csv<string>
    deny: any | string // Unclear: csv<string>
  }

  export interface FbPostAdminCreator {
    id: string
    name: string
  }

  export interface FbComment {
    id: string
    attachment: FbStoryAttachment
    can_comment: boolean
    can_remove: boolean
    can_hide: boolean
    can_like: boolean
    can_reply_privately: boolean
    comment_count: number
    created_time: FbDateTime
    from: FbUser
    like_count: number
    message: string
    message_tags: FbCommentMessageTag[]
    object?: Object
    parent: FbComment
    private_reply_conversation: FbConversation
    user_likes: boolean
  }

  export interface FbCommentMessageTag {
    id: string
    name: string
    type: "user" | "page" | "group"
    offset: number
    length: number
  }

  export interface FbStoryAttachment {
    description: string
    description_tags: FbEntityAtTextRange[]
    media: FbStoryAttachmentMedia
    target: FbStoryAttachmentTarget
    title: String
    type: String
    url: String
  }

  export interface FbStoryAttachmentMedia {
    image: any // Undocumented type: ImageSource
  }

  export interface FbStoryAttachmentTarget {
    id: string
    url: string
  }

  export interface FbConversation {
    id: string
    snippet: string
    updated_time: FbDateTime
    message_count: number
    unread_count: number
    tags: Set<FbConversationTag>
    participants: (FbUser | FbPage)[]
    senders: FbUser[]
    can_reply: boolean
    is_subscribed: boolean
  }

  export interface FbConversationTag {
    name: string
  }

  export interface FbMessage {
    created_time: FbDateTime
    from: FbProfile
    id: string
    message: string
    subject: string
    tags: Object[]
    to: FbProfile[]
  }

  export interface FbMilestone {
    id: string
    title: string
    from: FbPage
    description: string
    created_time: FbDateTime
    updated_time: FbDateTime
    start_time: FbDateTime
    end_time: FbDateTime
  }

  export interface FbNativeOffer {
    id: string
    barcode_photo: string
    barcode_photo_uri: string
    barcode_type: string
    barcode_value: string
    details: string
    disable_location: boolean
    discounts: any[] // Undocumented type: NativeOfferDiscount
    expiration_time: FbDateTime
    instore_code: string
    location_type: "online" | " offline" | " both"
    max_save_count: number
    online_code: string
    page: FbPage
    redemption_link: string
    save_count: number
    terms: string
    title: string
    total_unique_codes: string
    unique_codes: string
    unique_codes_file_code_type: string
    unique_codes_file_name: string
    unique_codes_file_upload_status: string
  }

  export interface FbObjectLikes {
    total_count: number
  }

  export interface FbDebugToken {
    input_token: string
  }

  export interface FbDoc {
    id: string
    can_delete: boolean
    can_edit: boolean
    created_time: FbDateTime
    from: FbUser
    icon: string
    link: string
    message: string
    revision: any // It's unclear: string or number?
    subject: string
    updated_time: FbDateTime
  }

  export interface FbDomain {
    id: string
    name: string
  }

  export interface FbFriendList {
    id: string
    list_type: string
    name: string
    owner: string
  }

  export interface FbStatus {
    id: string
    event: FbEvent
    from: FbProfile
    message: string
    place: FbPage
    updated_time: FbDateTime
  }

  export interface FbTestUser {
    name: string
    password: string
  }

  export interface FbUrl {
    id: string
    og_object: FbUrlOgObject;
    app_links: FbAppLinks;
    share: FbUrlShare
  }

  export interface FbUrlShare {
    comment_count: number
    share_count: number
  }

  export interface FbUrlOgObject {
    id: string
    description: string
    engagement: FbUrlEngagement
    title: string
    type: string
    updated_time: FbDateTime
    url: string
  }

  export interface FbUrlEngagement {
    count: number
    social_sentence: string
  }
}

export default FbGraphApi;
