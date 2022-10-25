const BodyExtractor = (fragmentContent: string): string => {
  const bodyMatch = fragmentContent.match(/\<body.*>([\d\D]+)<\/body>/);

  return bodyMatch
    ? bodyMatch[1]
    : fragmentContent;
}

export {
  BodyExtractor,
}
