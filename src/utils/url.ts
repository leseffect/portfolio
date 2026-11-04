const ALLOWED_PROTOCOLS = new Set(['http:', 'https:']);

/**
 * http/https 주소만 허용합니다.
 * `javascript:` 같은 위험한 스킴이 링크로 들어가는 것을 막기 위함입니다.
 */
export function toSafeUrl(rawUrl: string): string | null {
  try {
    const parsed = new URL(rawUrl);
    return ALLOWED_PROTOCOLS.has(parsed.protocol) ? parsed.href : null;
  } catch {
    return null;
  }
}
